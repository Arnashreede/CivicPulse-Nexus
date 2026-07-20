package com.civicpulse.certificateservice.service.impl;

import com.civicpulse.certificateservice.dto.CertificateRequest;
import com.civicpulse.certificateservice.dto.CertificateResponse;
import com.civicpulse.certificateservice.entity.Certificate;
import com.civicpulse.certificateservice.repository.CertificateRepository;
import com.civicpulse.certificateservice.service.CertificateService;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

import com.civicpulse.certificateservice.util.PdfGenerator;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

@Service
public class CertificateServiceImpl implements CertificateService {

    private final CertificateRepository repository;

    public CertificateServiceImpl(CertificateRepository repository) {
        this.repository = repository;
    }

    @Override
    public CertificateResponse generateCertificate(CertificateRequest request) {

        Certificate certificate = Certificate.builder()
                .certificateNumber("CPN-" + System.currentTimeMillis())
                .applicationId(request.getApplicationId())
                .citizenId(request.getCitizenId())
                .citizenName(request.getCitizenName())
                .serviceName(request.getServiceName())
                .departmentName(request.getDepartmentName())
                .officerName(request.getOfficerName())
                .officerId(request.getOfficerId())
                .status("APPROVED")
                .applicationDate(request.getApplicationDate())
                .approvalDate(request.getApprovalDate())
                .issueDate(LocalDate.now())
                .validTill(request.getValidTill())
                .referenceNumber(UUID.randomUUID().toString())
                .verificationCode(UUID.randomUUID().toString())
                .build();

        Certificate saved = repository.save(certificate);

        return CertificateResponse.builder()
                .certificateId(saved.getCertificateId())
                .certificateNumber(saved.getCertificateNumber())
                .applicationId(saved.getApplicationId())
                .citizenId(saved.getCitizenId())
                .citizenName(saved.getCitizenName())
                .serviceName(saved.getServiceName())
                .departmentName(saved.getDepartmentName())
                .officerName(saved.getOfficerName())
                .officerId(saved.getOfficerId())
                .issueDate(saved.getIssueDate())
                .validTill(saved.getValidTill())
                .verificationCode(saved.getVerificationCode())
                .qrCodeUrl(saved.getQrCodeUrl())
                .build();
    }

   @Override
public CertificateResponse getCertificateById(Long id) {

    Certificate certificate = repository.findById(id)
            .orElseThrow(() -> new RuntimeException("Certificate not found"));

    return mapToResponse(certificate);
}
@Override
public ResponseEntity<byte[]> downloadCertificate(Long id) throws Exception {

    Certificate certificate = repository.findById(id)
            .orElseThrow(() -> new RuntimeException("Certificate not found"));

    byte[] pdf = PdfGenerator.generateCertificate(certificate);

    return ResponseEntity.ok()
            .header(HttpHeaders.CONTENT_DISPOSITION,
                    "inline; filename=certificate.pdf")
            .contentType(MediaType.APPLICATION_PDF)
            .body(pdf);
}
   @Override
public CertificateResponse getCertificateByApplicationId(Long applicationId) {

    Certificate certificate = repository.findByApplicationId(applicationId)
            .orElseThrow(() -> new RuntimeException("Certificate not found"));

    return mapToResponse(certificate);
}

    @Override
public List<CertificateResponse> getAllCertificates() {

    return repository.findAll()
            .stream()
            .map(this::mapToResponse)
            .toList();
}
@Override
public CertificateResponse getCertificateByCertificateNumber(
        String certificateNumber) {

    Certificate certificate = repository
            .findByCertificateNumber(certificateNumber)
            .orElseThrow(() ->
                    new RuntimeException("Certificate not found"));

    return mapToResponse(certificate);
}
    @Override
    public void deleteCertificate(Long id) {
        repository.deleteById(id);
    }
    private CertificateResponse mapToResponse(Certificate certificate) {

    return CertificateResponse.builder()
            .certificateId(certificate.getCertificateId())
            .certificateNumber(certificate.getCertificateNumber())
            .applicationId(certificate.getApplicationId())
            .citizenId(certificate.getCitizenId())
            .citizenName(certificate.getCitizenName())
            .serviceName(certificate.getServiceName())
            .departmentName(certificate.getDepartmentName())
            .officerName(certificate.getOfficerName())
            .officerId(certificate.getOfficerId())
            .issueDate(certificate.getIssueDate())
            .validTill(certificate.getValidTill())
            .verificationCode(certificate.getVerificationCode())
            .qrCodeUrl(certificate.getQrCodeUrl())
            .build();
}
}