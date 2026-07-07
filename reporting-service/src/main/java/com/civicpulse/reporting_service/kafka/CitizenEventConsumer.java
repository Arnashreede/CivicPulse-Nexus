package com.civicpulse.reporting_service.kafka;

import com.civicpulse.reporting_service.entity.CitizenReport;
import com.civicpulse.reporting_service.event.CitizenRegisteredEvent;
import com.civicpulse.reporting_service.repository.CitizenReportRepository;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class CitizenEventConsumer {

    private final CitizenReportRepository repository;

    public CitizenEventConsumer(CitizenReportRepository repository) {
        this.repository = repository;
    }

    @KafkaListener(topics = "citizen-events", groupId = "reporting-group")
    public void consume(CitizenRegisteredEvent event) {

        CitizenReport report = new CitizenReport();

        report.setCitizenId(event.getCitizenId());
        report.setFullName(event.getFullName());
        report.setEmail(event.getEmail());
        report.setAddress(event.getAddress());

        repository.save(report);

        System.out.println("Citizen saved in Reporting DB: " + event.getFullName());
    }
}