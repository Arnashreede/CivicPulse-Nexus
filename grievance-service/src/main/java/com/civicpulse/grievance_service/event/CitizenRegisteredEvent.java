package com.civicpulse.grievance_service.event;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CitizenRegisteredEvent {

    private Long citizenId;
    private String fullName;
    private String email;
    private String address;
}