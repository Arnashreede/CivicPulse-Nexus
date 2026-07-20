package com.civicpulse.user_service.controller;

import com.civicpulse.user_service.dto.LoginRequest;
import com.civicpulse.user_service.dto.LoginResponse;
import com.civicpulse.user_service.dto.RegisterRequest;
import com.civicpulse.user_service.entity.User;
import com.civicpulse.user_service.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public User register(@RequestBody RegisterRequest request) {
        return userService.register(request);
    }

    @PostMapping("/login")
public LoginResponse login(@RequestBody LoginRequest request) {

    String token = userService.login(request);

    User user = userService.findByUsername(request.getUsername());

    String officerName = "";

    if (user.getUsername().equalsIgnoreCase("rahul")) {
        officerName = "Rahul Sharma";
    } else if (user.getUsername().equalsIgnoreCase("ravi")) {
        officerName = "Ravi Gupta";
    }

    return new LoginResponse(
            token,
            user.getRole(),
            user.getId(),
            user.getUsername(),
            officerName
    );
}
}