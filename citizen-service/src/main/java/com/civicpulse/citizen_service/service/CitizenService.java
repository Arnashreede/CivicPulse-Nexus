package com.civicpulse.citizen_service.service;

import com.civicpulse.citizen_service.entity.Citizen;
import com.civicpulse.citizen_service.repository.CitizenRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CitizenService {

    private final CitizenRepository citizenRepository;

    public CitizenService(CitizenRepository citizenRepository) {
        this.citizenRepository = citizenRepository;
    }

    public Citizen saveCitizen(Citizen citizen) {
        return citizenRepository.save(citizen);
    }

    public List<Citizen> getAllCitizens() {
        return citizenRepository.findAll();
    }

    public Citizen getCitizenById(Long id) {
        return citizenRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Citizen not found"));
    }

    public void deleteCitizen(Long id) {
        citizenRepository.deleteById(id);
    }
    public long getTotalCitizens() {
    return citizenRepository.count();
}
}