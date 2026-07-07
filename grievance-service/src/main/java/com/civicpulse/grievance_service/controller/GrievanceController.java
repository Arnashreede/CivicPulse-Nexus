package com.civicpulse.grievance_service.controller;

import com.civicpulse.grievance_service.entity.Grievance;
import com.civicpulse.grievance_service.service.GrievanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/grievances")
public class GrievanceController {

    @Autowired
    private GrievanceService grievanceService;

    @PostMapping
    public Grievance addGrievance(@RequestBody Grievance grievance) {
        return grievanceService.saveGrievance(grievance);
    }

    @GetMapping
    public List<Grievance> getAllGrievances() {
        return grievanceService.getAllGrievances();
    }

    @GetMapping("/{id}")
    public Grievance getGrievance(@PathVariable Long id) {
        return grievanceService.getGrievanceById(id);
    }

    @DeleteMapping("/{id}")
    public String deleteGrievance(@PathVariable Long id) {
        grievanceService.deleteGrievance(id);
        return "Grievance deleted successfully";
    }
}