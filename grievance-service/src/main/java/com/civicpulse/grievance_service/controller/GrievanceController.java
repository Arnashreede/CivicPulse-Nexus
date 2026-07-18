package com.civicpulse.grievance_service.controller;

import com.civicpulse.grievance_service.dto.AssignOfficerRequest;
import com.civicpulse.grievance_service.dto.DashboardCounts;
import com.civicpulse.grievance_service.entity.Grievance;
import com.civicpulse.grievance_service.service.GrievanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/grievances")
@CrossOrigin(origins = "http://localhost:5173")
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

    // ================= Dashboard =================

    @GetMapping("/dashboard/counts")
    public DashboardCounts getDashboardCounts() {

        System.out.println("DASHBOARD API HIT");

        return grievanceService.getDashboardCounts();
    }

    // ================= Officer =================

    @GetMapping("/officer/{name}")
    public List<Grievance> getOfficerGrievances(
            @PathVariable String name) {

        return grievanceService.getOfficerGrievances(name);
    }

    // ================= Get by ID =================

    @GetMapping("/{id}")
    public Grievance getGrievance(@PathVariable Long id) {
        return grievanceService.getGrievanceById(id);
    }

    // ================= Assign Officer =================

    @PutMapping("/{id}/assign")
    public Grievance assignOfficer(
            @PathVariable Long id,
            @RequestBody AssignOfficerRequest request) {

        return grievanceService.assignOfficer(id, request);
    }

    // ================= Update Status =================

    @PutMapping("/{id}/status")
    public Grievance updateStatus(
            @PathVariable Long id,
            @RequestParam String status) {

        return grievanceService.updateStatus(id, status);
    }

    // ================= Delete =================

    @DeleteMapping("/{id}")
    public String deleteGrievance(@PathVariable Long id) {

        grievanceService.deleteGrievance(id);

        return "Grievance deleted successfully";
    }
@GetMapping("/citizen/{citizenId}")
public List<Grievance> getCitizenGrievances(@PathVariable Long citizenId) {

    System.out.println("Citizen endpoint hit: " + citizenId);

    List<Grievance> grievances = grievanceService.getCitizenGrievances(citizenId);

    System.out.println("Found grievances: " + grievances.size());
    System.out.println(grievances);

    return grievances;
}

}