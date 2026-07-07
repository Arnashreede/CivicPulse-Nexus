package com.civicpulse.citizen_service.controller;

import com.civicpulse.citizen_service.dto.LoginRequest;
import com.civicpulse.citizen_service.dto.LoginResponse;
import com.civicpulse.citizen_service.security.JwtService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final JwtService jwtService;

    public AuthController(JwtService jwtService) {
        this.jwtService = jwtService;
    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {

        // Temporary authentication
        if ("admin".equals(request.getUsername())
                && "admin123".equals(request.getPassword())) {

            String token = jwtService.generateToken(request.getUsername());

            return new LoginResponse(token);
        }

        throw new RuntimeException("Invalid Username or Password");
    }
}