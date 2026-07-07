package com.civicpulse.grievance_service.service;

import com.civicpulse.grievance_service.entity.Grievance;
import com.civicpulse.grievance_service.repository.GrievanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import com.civicpulse.grievance_service.event.GrievanceCreatedEvent;
import com.civicpulse.grievance_service.kafka.GrievanceEventProducer;

@Service
public class GrievanceService {

    @Autowired
    private GrievanceRepository grievanceRepository;
    @Autowired
    private GrievanceEventProducer grievanceEventProducer;

    public Grievance saveGrievance(Grievance grievance) {

    Grievance savedGrievance = grievanceRepository.save(grievance);

    GrievanceCreatedEvent event = new GrievanceCreatedEvent(
            savedGrievance.getId(),
            savedGrievance.getCitizenId(),
            savedGrievance.getTitle(),
            savedGrievance.getCategory(),
            savedGrievance.getStatus(),
            savedGrievance.getPriority()
    );

    grievanceEventProducer.publishGrievanceCreatedEvent(event);

    return savedGrievance;
}

    public List<Grievance> getAllGrievances() {
        return grievanceRepository.findAll();
    }

    public Grievance getGrievanceById(Long id) {
        return grievanceRepository.findById(id).orElse(null);
    }

    public void deleteGrievance(Long id) {
        grievanceRepository.deleteById(id);
    }
}
