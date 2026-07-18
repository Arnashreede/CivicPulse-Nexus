package com.civicpulse.grievance_service.dto;

public class AssignOfficerRequest {

    private String assignedOfficer;
    private String priority;
    private String status;

    public AssignOfficerRequest() {
    }

    public String getAssignedOfficer() {
        return assignedOfficer;
    }

    public void setAssignedOfficer(String assignedOfficer) {
        this.assignedOfficer = assignedOfficer;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}