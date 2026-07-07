package com.civicpulse.reporting_service.repository;

import com.civicpulse.reporting_service.entity.GrievanceReport;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GrievanceReportRepository
        extends JpaRepository<GrievanceReport, Long> {
}