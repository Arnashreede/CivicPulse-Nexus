package com.civicpulse.citizen_service.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "citizens")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Citizen {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullName;

    @Column(unique = true)
    private String email;

    private String phone;

    private String address;

    private String aadhaarNumber;
}