package com.civicpulse.officer_service.repository;

import com.civicpulse.officer_service.entity.Officer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OfficerRepository
        extends JpaRepository<Officer, Long> {

    boolean existsByEmail(String email);

    boolean existsByPhone(String phone);

}