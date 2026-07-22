package com.civicpulse.officer_service.repository;

import com.civicpulse.officer_service.entity.Officer;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import java.util.List;

public interface OfficerRepository
        extends JpaRepository<Officer, Long> {

    boolean existsByEmail(String email);

    boolean existsByPhone(String phone);
Optional<Officer> findByUsername(String username);
Optional<Officer> findByEmail(String email);

List<Officer> findByDepartment(String department);

List<Officer> findByDepartmentAndDesignation(
        String department,
        String designation
);
}