package com.civicpulse.grievance_service.event;

public class GrievanceStatusUpdatedEvent {

    private Long grievanceId;
    private Long citizenId;
    private String title;
    private String status;

    public GrievanceStatusUpdatedEvent() {
    }

    public GrievanceStatusUpdatedEvent(
            Long grievanceId,
            Long citizenId,
            String title,
            String status) {

        this.grievanceId = grievanceId;
        this.citizenId = citizenId;
        this.title = title;
        this.status = status;
    }

    public Long getGrievanceId() {
        return grievanceId;
    }

    public void setGrievanceId(Long grievanceId) {
        this.grievanceId = grievanceId;
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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}