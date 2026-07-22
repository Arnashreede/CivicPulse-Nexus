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
    public Officer getOfficerByUsername(String username) {
    return repository.findByUsername(username).orElse(null);
}
    public long getTotalOfficers() {
    return repository.count();
}
public List<Officer> getOfficersByDepartment(String department) {
    return repository.findByDepartment(department);
}

public List<Officer> getOfficersByDepartmentAndDesignation(
        String department,
        String designation) {

    return repository.findByDepartmentAndDesignation(
            department,
            designation
    );
}

public Officer updateOfficer(Long id, Officer updatedOfficer) {

    Officer officer = repository.findById(id)
            .orElseThrow(() -> new RuntimeException("Officer not found"));

    officer.setFullName(updatedOfficer.getFullName());
    officer.setUsername(updatedOfficer.getUsername());
    officer.setEmail(updatedOfficer.getEmail());
    officer.setPhone(updatedOfficer.getPhone());
    officer.setDepartment(updatedOfficer.getDepartment());
    officer.setDesignation(updatedOfficer.getDesignation());

    return repository.save(officer);
}

}