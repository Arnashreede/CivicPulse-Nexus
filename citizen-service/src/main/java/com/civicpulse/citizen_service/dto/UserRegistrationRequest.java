package com.civicpulse.citizen_service.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserRegistrationRequest {

    private String fullName;
    private String email;
    private String password;
    private String role;

}