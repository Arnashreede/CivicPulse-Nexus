package com.civicpulse.citizen_service.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class LoginResponse {

    private String token;
    private Long citizenId;
    private String fullName;
    private String email;
    private String role;

}