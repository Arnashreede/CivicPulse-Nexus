package com.civicpulse.certificateservice.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Data
@Builder
public class CertificateResponse {

    private Long certificateId;

    private String certificateNumber;

    private Long applicationId;

    private Long citizenId;

    private String citizenName;

    private String serviceName;

    private String departmentName;

    private String officerName;

    private String officerId;

    private LocalDate issueDate;

    private LocalDate validTill;

    private String verificationCode;

    private String qrCodeUrl;
}