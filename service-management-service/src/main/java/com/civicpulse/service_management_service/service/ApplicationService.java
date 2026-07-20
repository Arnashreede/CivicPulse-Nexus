package com.civicpulse.service_management_service.service;

import com.civicpulse.service_management_service.entity.Application;
import com.civicpulse.service_management_service.repository.ApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.time.LocalDate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.UrlResource;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.*;
import org.springframework.core.io.Resource;

@Service
public class ApplicationService {

    @Autowired
    private ApplicationRepository applicationRepository;
    @Value("${file.upload-dir}")
private String uploadDir;

    // Submit a new application
    public Application submitApplication(Application application) {

        application.setStatus("SUBMITTED");

        return applicationRepository.save(application);
    }

    // Get all applications
    public List<Application> getAllApplications() {
        return applicationRepository.findAll();
    }

    // Get application by ID
    public Application getApplicationById(Long id) {

        return applicationRepository.findById(id).orElse(null);
    }

    // Get applications of one citizen
    public List<Application> getCitizenApplications(Long citizenId) {

        return applicationRepository.findByCitizenId(citizenId);
    }
public List<Application> getApplicationsByStatus(String status) {

    return applicationRepository.findByStatus(status);
}

public List<Application> getApplicationsByType(String applicationType) {

    return applicationRepository.findByApplicationType(applicationType);
}
    
   // Approve application
public Application approveApplication(Long id) {

    Application application = applicationRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Application not found"));

    if (!"VERIFIED".equals(application.getStatus())) {
        throw new RuntimeException("Application must be verified before approval.");
    }

    application.setStatus("APPROVED");

    application.setCertificateNumber(
            "CERT-" + System.currentTimeMillis()
    );

    application.setApprovedBy("Municipal Officer");
    application.setApprovedDate(LocalDate.now());
    application.setRemarks("Application Approved");

    return applicationRepository.save(application);
}
// Reject application
public Application rejectApplication(Long id, String reason) {

    Application application = applicationRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Application not found"));

    application.setStatus("REJECTED");
    application.setRejectionReason(reason);
    application.setRemarks(reason);

    return applicationRepository.save(application);
}
    // Delete application
    public void deleteApplication(Long id) {
        applicationRepository.deleteById(id);
    }
    public Application verifyApplication(Long id) {

    Application application = applicationRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Application not found"));

    application.setStatus("VERIFIED");
    application.setRemarks("Documents verified successfully");

    return applicationRepository.save(application);
}
public Application uploadDocument(Long id, MultipartFile file) throws IOException {

    Application application = applicationRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Application not found"));

    Path uploadPath = Paths.get(uploadDir);

    if (!Files.exists(uploadPath)) {
        Files.createDirectories(uploadPath);
    }

    String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();

    Files.copy(
            file.getInputStream(),
            uploadPath.resolve(fileName),
            StandardCopyOption.REPLACE_EXISTING
    );

    application.setDocumentName(fileName);
    application.setDocumentType(file.getContentType());
    application.setDocumentPath(uploadPath.resolve(fileName).toString());

    return applicationRepository.save(application);
}
public Resource getDocument(Long id) throws IOException {

    Application application = applicationRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Application not found"));

    Path path = Paths.get(application.getDocumentPath());

    return new UrlResource(path.toUri());
}
}