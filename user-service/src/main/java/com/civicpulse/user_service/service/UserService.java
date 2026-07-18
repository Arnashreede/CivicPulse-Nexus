package com.civicpulse.user_service.service;

import com.civicpulse.user_service.dto.LoginRequest;
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

        user.setUsername(request.getUsername());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(request.getRole());

        return userRepository.save(user);
    }

    // Login User
    public String login(LoginRequest request) {
        System.out.println("USERNAME RECEIVED = " + request.getUsername());
        User user = userRepository.findByUsername(request.getUsername())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid Password");
        }

        return jwtService.generateToken(
            user.getUsername(),
            user.getRole()
        );
    }
    public User findByUsername(String username) {

    return userRepository.findByUsername(username)
            .orElseThrow(() ->
                    new RuntimeException("User not found"));
}
}