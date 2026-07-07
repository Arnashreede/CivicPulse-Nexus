package com.civicpulse.grievance_service.kafka;

import com.civicpulse.grievance_service.event.GrievanceCreatedEvent;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class GrievanceEventProducer {

    private final KafkaTemplate<String, GrievanceCreatedEvent> kafkaTemplate;

    public GrievanceEventProducer(KafkaTemplate<String, GrievanceCreatedEvent> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    public void publishGrievanceCreatedEvent(GrievanceCreatedEvent event) {
        kafkaTemplate.send("grievance-events", event);
        System.out.println("Published Grievance Event: " + event.getTitle());
    }
}