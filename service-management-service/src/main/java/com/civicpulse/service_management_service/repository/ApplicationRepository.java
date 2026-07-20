package com.civicpulse.service_management_service.repository;

import com.civicpulse.service_management_service.entity.Application;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ApplicationRepository extends JpaRepository<Application, Long> {

    List<Application> findByCitizenId(Long citizenId);

    List<Application> findByStatus(String status);

List<Application> findByApplicationType(String applicationType);
}