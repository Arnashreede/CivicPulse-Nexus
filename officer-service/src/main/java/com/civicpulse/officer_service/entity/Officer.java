package com.civicpulse.officer_service.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "officers")
public class Officer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true)
private String username;

    private String fullName;

    @Column(unique = true)
    private String email;

    @Column(unique = true)
    private String phone;

    private String department;

    private String designation;
private String password;

private boolean active = true;
    public Officer() {
    }

    public Officer(Long id, String fullName, String email,
                   String phone, String department,
                   String designation) {

        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.phone = phone;
        this.department = department;
        this.designation = designation;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id=id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName=fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email=email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone=phone;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department=department;
    }

    public String getDesignation() {
        return designation;
    }
public String getUsername() {
    return username;
}

public void setUsername(String username) {
    this.username = username;
}
    public void setDesignation(String designation) {
        this.designation=designation;
    }
public String getPassword() {
    return password;
}

public void setPassword(String password) {
    this.password = password;
}

public boolean isActive() {
    return active;
}

public void setActive(boolean active) {
    this.active = active;
}
}