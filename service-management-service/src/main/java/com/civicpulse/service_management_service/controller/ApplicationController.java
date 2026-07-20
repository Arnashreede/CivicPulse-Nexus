package com.civicpulse.service_management_service.controller;

import com.civicpulse.service_management_service.entity.Application;
import com.civicpulse.service_management_service.service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;

import java.io.IOException;
@RestController
@RequestMapping("/applications")
@CrossOrigin(origins = "http://localhost:5173")
public class ApplicationController {

    @Autowired
    private ApplicationService applicationService;

    @PostMapping
    public Application submitApplication(@RequestBody Application application) {
        return applicationService.submitApplication(application);
    }

    @GetMapping
    public List<Application> getAllApplications() {
        return applicationService.getAllApplications();
    }

    @GetMapping("/{id}")
    public Application getApplication(@PathVariable Long id) {
        return applicationService.getApplicationById(id);
    }

    @GetMapping("/citizen/{citizenId}")
    public List<Application> getCitizenApplications(@PathVariable Long citizenId) {
        return applicationService.getCitizenApplications(citizenId);
    }

    @PutMapping("/{id}/approve")
    public Application approveApplication(@PathVariable Long id) {
        return applicationService.approveApplication(id);
    }

  

    @DeleteMapping("/{id}")
    public String deleteApplication(@PathVariable Long id) {

        applicationService.deleteApplication(id);

        return "Application deleted successfully";
    }
    @PutMapping("/{id}/verify")
public Application verifyApplication(@PathVariable Long id) {

    return applicationService.verifyApplication(id);
}
@GetMapping("/{id}/certificate")
public Application getCertificate(@PathVariable Long id) {
    return applicationService.getApplicationById(id);
}

@GetMapping("/status/{status}")
public List<Application> getApplicationsByStatus(
        @PathVariable String status) {

    return applicationService.getApplicationsByStatus(status);
}

@GetMapping("/type/{type}")
public List<Application> getApplicationsByType(
        @PathVariable String type) {

    return applicationService.getApplicationsByType(type);
}
@PostMapping("/{id}/upload")
public ResponseEntity<Application> uploadDocument(
        @PathVariable Long id,
        @RequestParam("file") MultipartFile file) throws IOException {

    Application application = applicationService.uploadDocument(id, file);

    return ResponseEntity.ok(application);
}
@GetMapping("/{id}/document")
public ResponseEntity<Resource> viewDocument(@PathVariable Long id) throws IOException {

    Resource resource = applicationService.getDocument(id);

    return ResponseEntity.ok()
            .contentType(MediaType.APPLICATION_OCTET_STREAM)
            .header(HttpHeaders.CONTENT_DISPOSITION,
                    "inline; filename=\"" + resource.getFilename() + "\"")
            .body(resource);
}
@PutMapping("/{id}/reject")
public Application rejectApplication(
        @PathVariable Long id,
        @RequestParam String reason) {

    return applicationService.rejectApplication(id, reason);
}
}