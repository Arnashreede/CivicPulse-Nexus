package com.civicpulse.citizen_service.controller;

import com.civicpulse.citizen_service.entity.Citizen;
import com.civicpulse.citizen_service.service.CitizenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/citizens")
public class CitizenController {

    @Autowired
    private CitizenService citizenService;

    @PostMapping
    public Citizen addCitizen(@RequestBody Citizen citizen) {
        return citizenService.saveCitizen(citizen);
    }

    @GetMapping
    public List<Citizen> getAllCitizens() {
        return citizenService.getAllCitizens();
    }

    @GetMapping("/{id}")
    public Citizen getCitizen(@PathVariable Long id) {
        return citizenService.getCitizenById(id);
    }

    @DeleteMapping("/{id}")
    public String deleteCitizen(@PathVariable Long id) {
        citizenService.deleteCitizen(id);
        return "Citizen deleted successfully";
    }
}