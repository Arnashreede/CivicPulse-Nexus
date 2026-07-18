package com.civicpulse.officer_service.service;

import com.civicpulse.officer_service.entity.Officer;
import com.civicpulse.officer_service.repository.OfficerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OfficerService {

    private final OfficerRepository repository;

    public OfficerService(OfficerRepository repository) {
        this.repository = repository;
    }

    public Officer saveOfficer(Officer officer) {

        if(repository.existsByEmail(officer.getEmail())){
            throw new RuntimeException("Email already exists");
        }

        if(repository.existsByPhone(officer.getPhone())){
            throw new RuntimeException("Phone already exists");
        }

        return repository.save(officer);
    }

    public List<Officer> getAllOfficers() {
        return repository.findAll();
    }

    public Officer getOfficer(Long id) {
        return repository.findById(id).orElse(null);
    }

    public void deleteOfficer(Long id) {
        repository.deleteById(id);
    }
    public long getTotalOfficers() {
    return repository.count();
}

}