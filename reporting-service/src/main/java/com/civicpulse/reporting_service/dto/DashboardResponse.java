package com.civicpulse.reporting_service.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class DashboardResponse {

    private long totalCitizens;
    private long totalGrievances;
    private long openGrievances;
    private long highPriorityGrievances;
    private long totalCertificates;
}