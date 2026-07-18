package com.civicpulse.grievance_service.service;

import com.civicpulse.grievance_service.dto.AssignOfficerRequest;
import com.civicpulse.grievance_service.entity.Grievance;
import com.civicpulse.grievance_service.event.GrievanceCreatedEvent;
import com.civicpulse.grievance_service.kafka.GrievanceEventProducer;
import com.civicpulse.grievance_service.repository.GrievanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import com.civicpulse.grievance_service.dto.DashboardCounts;
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
    public List<Grievance> getOfficerGrievances(String officerName) {
    return grievanceRepository.findByAssignedOfficer(officerName);
}
    public List<Grievance> getCitizenGrievances(Long citizenId) {
    return grievanceRepository.findByCitizenId(citizenId);
}   
    public Grievance getGrievanceById(Long id) {
        return grievanceRepository.findById(id).orElse(null);
    }
    public Grievance updateStatus(Long id, String status) {

    Grievance grievance = grievanceRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Grievance not found"));

    grievance.setStatus(status);

    return grievanceRepository.save(grievance);
}

    public void deleteGrievance(Long id) {
        grievanceRepository.deleteById(id);
    }

    public Grievance assignOfficer(Long id, AssignOfficerRequest request) {

        Grievance grievance = grievanceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Grievance not found"));

        grievance.setAssignedOfficer(request.getAssignedOfficer());
        grievance.setPriority(request.getPriority());
        grievance.setStatus(request.getStatus());

        return grievanceRepository.save(grievance);
    }
    public DashboardCounts getDashboardCounts() {

    long total = grievanceRepository.count();

    long pending = grievanceRepository.countByStatusIgnoreCase("PENDING");

    long inProgress = grievanceRepository.countByStatusIgnoreCase("IN_PROGRESS");

    long resolved = grievanceRepository.countByStatusIgnoreCase("RESOLVED");

    long closed = grievanceRepository.countByStatusIgnoreCase("CLOSED");

    return new DashboardCounts(
            total,
            pending,
            inProgress,
            resolved,
            closed
    );
}
}