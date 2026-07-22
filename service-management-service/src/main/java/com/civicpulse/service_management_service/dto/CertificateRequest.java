package com.civicpulse.service_management_service.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class CertificateRequest {

    private Long applicationId;
    private Long citizenId;
    private String citizenName;
    private String serviceName;
    private String departmentName;
    private String officerName;
    private String officerId;
    private LocalDate applicationDate;
    private LocalDate approvalDate;
    private LocalDate validTill;

}