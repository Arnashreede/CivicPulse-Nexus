package com.civicpulse.user_service.service;

import com.civicpulse.user_service.dto.LoginRequest;
import com.civicpulse.user_service.dto.LoginResponse;
import com.civicpulse.user_service.dto.RegisterRequest;
import com.civicpulse.user_service.entity.User;
import com.civicpulse.user_service.repository.UserRepository;
import com.civicpulse.user_service.security.JwtService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final JwtService jwtService;

    private final BCryptPasswordEncoder passwordEncoder =
            new BCryptPasswordEncoder();

    public UserService(UserRepository userRepository,
                       JwtService jwtService) {

        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }

    // Register User
    public User register(RegisterRequest request) {

        User user = new User();

        user.setFullName(request.getFullName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(request.getRole());
        user.setActive(true);

        return userRepository.save(user);
    }

    // Login User
    public LoginResponse login(LoginRequest request) {

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!user.isActive()) {
            throw new RuntimeException("Account is inactive");
        }

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid Password");
        }

        String token = jwtService.generateToken(
                user.getEmail(),
                user.getRole()
        );

        return new LoginResponse(
                token,
                user.getRole(),
                user.getId(),
                user.getEmail(),
                user.getFullName()
        );
    }

    public User findByEmail(String email) {

        return userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new RuntimeException("User not found"));
    }
}