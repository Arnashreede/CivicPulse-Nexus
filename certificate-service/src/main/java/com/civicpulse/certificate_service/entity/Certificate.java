package com.civicpulse.certificateservice.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "certificates")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Certificate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long certificateId;

    @Column(unique = true, nullable = false)
    private String certificateNumber;

    private Long applicationId;

    private Long citizenId;

    private String citizenName;

    private String serviceName;

    private String departmentName;

    private String officerName;

    private String officerId;

    private String status;

    private LocalDate applicationDate;

    private LocalDate approvalDate;

    private LocalDate issueDate;

    private LocalDate validTill;

    private String referenceNumber;

    private String verificationCode;

    private String qrCodeUrl;
}