package com.civicpulse.certificateservice.repository;

import com.civicpulse.certificateservice.entity.Certificate;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CertificateRepository extends JpaRepository<Certificate, Long> {

    Optional<Certificate> findByCertificateNumber(String certificateNumber);

    Optional<Certificate> findByApplicationId(Long applicationId);

    Optional<Certificate> findByVerificationCode(String verificationCode);
    
}