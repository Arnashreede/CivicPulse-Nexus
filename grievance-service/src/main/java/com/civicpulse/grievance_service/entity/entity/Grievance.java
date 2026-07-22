package com.civicpulse.grievance_service.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "grievances")
public class Grievance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long citizenId;

    private String title;

    private String description;

   private String department;
private String category;

    private String status = "OPEN";

    private String priority = "LOW";

    private String assignedOfficer = "";
private String remarks;

public String getRemarks() {
    return remarks;
}

public void setRemarks(String remarks) {
    this.remarks = remarks;
}
    public Grievance() {
    }

    public Grievance(Long id, Long citizenId, String title, String description,
                 String department, String category,
                 String status, String priority,
                 String assignedOfficer) {

    this.id = id;
    this.citizenId = citizenId;
    this.title = title;
    this.description = description;
    this.department = department;
    this.category = category;
    this.status = status;
    this.priority = priority;
    this.assignedOfficer = assignedOfficer;
} 
        

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getCitizenId() {
        return citizenId;
    }

    public void setCitizenId(Long citizenId) {
        this.citizenId = citizenId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }
    public String getDepartment() {
    return department;
}

public void setDepartment(String department) {
    this.department = department;
}

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public String getAssignedOfficer() {
        return assignedOfficer;
    }

    public void setAssignedOfficer(String assignedOfficer) {
        this.assignedOfficer = assignedOfficer;
    }
}