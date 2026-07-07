package com.civicpulse.grievance_service.repository;

import com.civicpulse.grievance_service.entity.Grievance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GrievanceRepository extends JpaRepository<Grievance, Long> {

}