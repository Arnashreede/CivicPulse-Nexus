package com.civicpulse.citizen_service.service;

import com.civicpulse.citizen_service.dto.UserRegistrationRequest;
import com.civicpulse.citizen_service.entity.Citizen;
import com.civicpulse.citizen_service.repository.CitizenRepository;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class CitizenService {

    private final CitizenRepository citizenRepository;
    private final RestTemplate restTemplate;

    public CitizenService(CitizenRepository citizenRepository,
                          RestTemplate restTemplate) {
        this.citizenRepository = citizenRepository;
        this.restTemplate = restTemplate;
    }

    public Citizen saveCitizen(Citizen citizen) {

        // Save citizen
        Citizen savedCitizen = citizenRepository.save(citizen);

        // Create user request
        UserRegistrationRequest request = new UserRegistrationRequest();
        request.setFullName(savedCitizen.getFullName());
        request.setEmail(savedCitizen.getEmail());
        request.setPassword(savedCitizen.getPassword());
        request.setRole("CITIZEN");

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<UserRegistrationRequest> entity =
                new HttpEntity<>(request, headers);

        // Call User Service
        restTemplate.postForObject(
                "http://localhost:8083/auth/register",
                entity,
                Object.class
        );

        return savedCitizen;
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