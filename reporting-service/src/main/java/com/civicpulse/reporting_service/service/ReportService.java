package com.civicpulse.reporting_service.service;

import com.civicpulse.reporting_service.dto.DashboardResponse;
import com.civicpulse.reporting_service.entity.CitizenReport;
import com.civicpulse.reporting_service.repository.CitizenReportRepository;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class ReportService {

    private final CitizenReportRepository repository;
    private final RestTemplate restTemplate;

    public ReportService(CitizenReportRepository repository,
                         RestTemplate restTemplate) {
        this.repository = repository;
        this.restTemplate = restTemplate;
    }

    public List<CitizenReport> getAllCitizens() {
        return repository.findAll();
    }

    public long getCitizenCount() {
        return repository.count();
    }

    public DashboardResponse getDashboard() {

        long totalCitizens = repository.count();

        long totalGrievances = 0;
        long openGrievances = 0;
        long highPriorityGrievances = 0;

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

        return new DashboardResponse(
                totalCitizens,
                totalGrievances,
                openGrievances,
                highPriorityGrievances,
                totalCertificates
        );
    }
}