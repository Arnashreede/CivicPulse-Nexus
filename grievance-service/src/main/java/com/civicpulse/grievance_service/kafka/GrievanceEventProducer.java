package com.civicpulse.grievance_service.kafka;

import com.civicpulse.grievance_service.event.GrievanceCreatedEvent;
import com.civicpulse.grievance_service.event.GrievanceStatusUpdatedEvent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class GrievanceEventProducer {

    @Autowired
    private KafkaTemplate<String, Object> kafkaTemplate;

    public void publishGrievanceCreatedEvent(GrievanceCreatedEvent event) {

        kafkaTemplate.send("grievance-created", event);

        System.out.println("Grievance Created Event Published");
    }

    public void publishStatusUpdatedEvent(GrievanceStatusUpdatedEvent event) {

        kafkaTemplate.send("grievance-status-updated", event);

        System.out.println("Grievance Status Updated Event Published");
    }
}