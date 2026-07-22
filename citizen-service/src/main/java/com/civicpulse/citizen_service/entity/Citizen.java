package com.civicpulse.citizen_service.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
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

    @NotBlank(message = "Full Name is required")
    @Pattern(
            regexp = "^[A-Za-z ]+$",
            message = "Full Name should contain only letters"
    )
    private String fullName;

    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    @Column(unique = true)
    private String email;

    @NotBlank(message = "Phone number is required")
    @Pattern(
            regexp = "^[6-9]\\d{9}$",
            message = "Phone number must be 10 digits and start with 6-9"
    )
    private String phone;

    @NotBlank(message = "Address is required")
    private String address;

    @NotBlank(message = "Aadhaar Number is required")
    @Pattern(
            regexp = "^\\d{12}$",
            message = "Aadhaar Number must be exactly 12 digits"
    )
    
    @Column(unique = true)
    private String aadhaarNumber;
    @NotBlank(message = "Password is required")
@Size(min = 6, message = "Password must be at least 6 characters")
private String password;
}