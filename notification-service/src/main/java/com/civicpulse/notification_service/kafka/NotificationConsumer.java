package com.civicpulse.notification_service.kafka;

import com.civicpulse.notification_service.entity.Notification;
import com.civicpulse.notification_service.event.GrievanceCreatedEvent;
import com.civicpulse.notification_service.service.NotificationService;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

@Component
public class NotificationConsumer {

    private final NotificationService notificationService;

    public NotificationConsumer(NotificationService notificationService) {
        this.notificationService = notificationService;
    }

    @KafkaListener(topics = "grievance-created", groupId = "notification-group")
    public void consume(GrievanceCreatedEvent event) {

        Notification notification = new Notification(
                event.getCitizenId(),
                "Complaint Registered",
                "Your complaint \"" + event.getTitle() + "\" has been registered successfully.",
                "GRIEVANCE_CREATED"
        );

        notificationService.save(notification);

        System.out.println("Notification saved for Citizen ID: " + event.getCitizenId());
    }
}