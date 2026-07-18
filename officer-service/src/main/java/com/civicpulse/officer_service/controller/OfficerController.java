package com.civicpulse.officer_service.controller;

import com.civicpulse.officer_service.entity.Officer;
import com.civicpulse.officer_service.service.OfficerService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/officers")
@CrossOrigin(origins = "http://localhost:5173")
public class OfficerController {

    private final OfficerService officerService;

    public OfficerController(OfficerService officerService) {
        this.officerService = officerService;
    }

    @PostMapping
    public Officer saveOfficer(@RequestBody Officer officer) {
        return officerService.saveOfficer(officer);
    }

    @GetMapping
    public List<Officer> getAllOfficers() {
        return officerService.getAllOfficers();
    }

    @GetMapping("/{id}")
    public Officer getOfficer(@PathVariable Long id) {
        return officerService.getOfficer(id);
    }

    @DeleteMapping("/{id}")
    public String deleteOfficer(@PathVariable Long id) {
        officerService.deleteOfficer(id);
        return "Officer Deleted Successfully";
    }
@GetMapping("/dashboard/count")
public long getTotalOfficers() {
    return officerService.getTotalOfficers();
}
}