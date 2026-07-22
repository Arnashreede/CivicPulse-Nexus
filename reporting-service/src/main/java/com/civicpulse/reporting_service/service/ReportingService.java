package com.civicpulse.reporting_service.service;

import com.civicpulse.reporting_service.dto.DashboardResponse;
import com.civicpulse.reporting_service.entity.CitizenReport;
import com.civicpulse.reporting_service.entity.GrievanceReport;
import com.civicpulse.reporting_service.repository.CitizenReportRepository;
import com.civicpulse.reporting_service.repository.GrievanceReportRepository;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class ReportingService {

    private final CitizenReportRepository citizenRepository;
    private final GrievanceReportRepository grievanceRepository;
    private final RestTemplate restTemplate;

    public ReportingService(
            CitizenReportRepository citizenRepository,
            GrievanceReportRepository grievanceRepository,
            RestTemplate restTemplate) {

        this.citizenRepository = citizenRepository;
        this.grievanceRepository = grievanceRepository;
        this.restTemplate = restTemplate;
    }

    public List<CitizenReport> getAllCitizens() {
        return citizenRepository.findAll();
    }

    public List<GrievanceReport> getAllGrievances() {
        return grievanceRepository.findAll();
    }

    public DashboardResponse getDashboard() {

        long totalCertificates = 0;

        try {
            Long count = restTemplate.getForObject(
                    "http://certificate-service/certificates/count",
                    Long.class);

            if (count != null) {
                totalCertificates = count;
            }

        } catch (Exception e) {
            totalCertificates = 0;
        }

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
                highPriorityGrievances,
                totalCertificates
        );
    }

    public long getCitizenCount() {
        return citizenRepository.count();
    }
}