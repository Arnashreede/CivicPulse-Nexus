package com.civicpulse.reporting_service.repository;

import com.civicpulse.reporting_service.entity.CitizenReport;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CitizenReportRepository extends JpaRepository<CitizenReport, Long> {
}