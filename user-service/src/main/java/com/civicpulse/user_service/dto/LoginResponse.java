package com.civicpulse.user_service.dto;

public class LoginResponse {

    private String token;
    private String role;
    private Long id;
    private String username;
    private String officerName;

    public LoginResponse(String token,
                         String role,
                         Long id,
                         String username,
                         String officerName) {

        this.token = token;
        this.role = role;
        this.id = id;
        this.username = username;
        this.officerName = officerName;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getOfficerName() {
        return officerName;
    }

    public void setOfficerName(String officerName) {
        this.officerName = officerName;
    }
}