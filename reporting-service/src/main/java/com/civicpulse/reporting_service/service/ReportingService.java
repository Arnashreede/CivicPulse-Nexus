package com.civicpulse.reporting_service.service;

import com.civicpulse.reporting_service.entity.CitizenReport;
import com.civicpulse.reporting_service.entity.GrievanceReport;
import com.civicpulse.reporting_service.repository.CitizenReportRepository;
import com.civicpulse.reporting_service.repository.GrievanceReportRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import com.civicpulse.reporting_service.dto.DashboardResponse;

@Service
public class ReportingService {

    private final CitizenReportRepository citizenRepository;
    private final GrievanceReportRepository grievanceRepository;

    public ReportingService(
            CitizenReportRepository citizenRepository,
            GrievanceReportRepository grievanceRepository) {

        this.citizenRepository = citizenRepository;
        this.grievanceRepository = grievanceRepository;
    }

    public List<CitizenReport> getAllCitizens() {
        return citizenRepository.findAll();
    }

    public List<GrievanceReport> getAllGrievances() {
        return grievanceRepository.findAll();

    }

    public DashboardResponse getDashboard() {

    long totalCitizens = citizenRepository.count();

    long totalGrievances = grievanceRepository.count();

    long openGrievances = grievanceRepository.findAll()
            .stream()
            .filter(g -> "OPEN".equalsIgnoreCase(g.getStatus()))
            .count();

    long highPriorityGrievances = grievanceRepository.findAll()
            .stream()
            .filter(g -> "HIGH".equalsIgnoreCase(g.getPriority()))
            .count();

    return new DashboardResponse(
            totalCitizens,
            totalGrievances,
            openGrievances,
            highPriorityGrievances
    );
}
public long getCitizenCount() {
    return citizenRepository.count();
}
}