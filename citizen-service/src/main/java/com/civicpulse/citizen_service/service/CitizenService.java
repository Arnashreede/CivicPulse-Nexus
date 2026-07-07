package com.civicpulse.citizen_service.service;

import com.civicpulse.citizen_service.entity.Citizen;
import com.civicpulse.citizen_service.repository.CitizenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import com.civicpulse.citizen_service.event.CitizenRegisteredEvent;
import com.civicpulse.citizen_service.kafka.CitizenEventProducer;

@Service
public class CitizenService {

    @Autowired
    private CitizenRepository citizenRepository;

    @Autowired
    private CitizenEventProducer citizenEventProducer;

    public Citizen saveCitizen(Citizen citizen) {

    Citizen savedCitizen = citizenRepository.save(citizen);

   CitizenRegisteredEvent event = new CitizenRegisteredEvent(
        savedCitizen.getId(),
        savedCitizen.getFullName(),
        savedCitizen.getEmail(),
        savedCitizen.getAddress()
);
    

    citizenEventProducer.publishCitizenRegisteredEvent(event);

    return savedCitizen;
}

    public List<Citizen> getAllCitizens() {
        return citizenRepository.findAll();
    }

    public Citizen getCitizenById(Long id) {
        return citizenRepository.findById(id).orElse(null);
    }

    public void deleteCitizen(Long id) {
        citizenRepository.deleteById(id);
    }
}