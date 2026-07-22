package com.civicpulse.certificateservice.repository;

import com.civicpulse.certificateservice.entity.Certificate;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.time.LocalDate;



public interface CertificateRepository extends JpaRepository<Certificate, Long> {

    Optional<Certificate> findByCertificateNumber(String certificateNumber);

    Optional<Certificate> findByApplicationId(Long applicationId);

    Optional<Certificate> findByVerificationCode(String verificationCode);
    Optional<Certificate> findByCitizenIdAndServiceNameAndValidTillAfter(
        Long citizenId,
        String serviceName,
        LocalDate date);
        List<Certificate> findByCitizenId(Long citizenId);
}