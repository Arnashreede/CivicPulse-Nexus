package com.civicpulse.citizen_service.kafka;

import com.civicpulse.citizen_service.event.CitizenRegisteredEvent;
import lombok.RequiredArgsConstructor;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CitizenEventProducer {

    private final KafkaTemplate<String, CitizenRegisteredEvent> kafkaTemplate;

    public void publishCitizenRegisteredEvent(CitizenRegisteredEvent event) {
        kafkaTemplate.send("citizen-events", event);
    }
}