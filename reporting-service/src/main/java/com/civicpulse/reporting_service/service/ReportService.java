package com.civicpulse.reporting_service.service;

import com.civicpulse.reporting_service.dto.DashboardResponse;
import com.civicpulse.reporting_service.entity.CitizenReport;
import com.civicpulse.reporting_service.repository.CitizenReportRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReportService {

    private final CitizenReportRepository repository;

    public ReportService(CitizenReportRepository repository) {
        this.repository = repository;
    }

    public List<CitizenReport> getAllCitizens() {
        return repository.findAll();
    }

    public long getCitizenCount() {
        return repository.count();
    }

    public DashboardResponse getDashboard() {

        long totalCitizens = repository.count();

        // Replace these dummy values later
        long totalGrievances = 0;
        long openGrievances = 0;
        long highPriorityGrievances = 0;

        return new DashboardResponse(
                totalCitizens,
                totalGrievances,
                openGrievances,
                highPriorityGrievances
        );
    }
}