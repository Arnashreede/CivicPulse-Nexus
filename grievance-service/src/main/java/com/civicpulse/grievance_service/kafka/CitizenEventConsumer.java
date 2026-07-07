package com.civicpulse.grievance_service.kafka;

import com.civicpulse.grievance_service.event.CitizenRegisteredEvent;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class CitizenEventConsumer {

    @KafkaListener(topics = "citizen-events", groupId = "grievance-group")
    public void consume(CitizenRegisteredEvent event) {

        System.out.println("==================================");
        System.out.println("Citizen Event Received");
        System.out.println("ID      : " + event.getCitizenId());
        System.out.println("Name    : " + event.getFullName());
        System.out.println("Email   : " + event.getEmail());
        System.out.println("Address : " + event.getAddress());
        System.out.println("==================================");
    }
}