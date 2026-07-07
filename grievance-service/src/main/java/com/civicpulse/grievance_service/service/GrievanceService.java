package com.civicpulse.grievance_service.service;

import com.civicpulse.grievance_service.entity.Grievance;
import com.civicpulse.grievance_service.repository.GrievanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GrievanceService {

    @Autowired
    private GrievanceRepository grievanceRepository;

    public Grievance saveGrievance(Grievance grievance) {
        return grievanceRepository.save(grievance);
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