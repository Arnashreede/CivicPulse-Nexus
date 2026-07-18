package com.civicpulse.notification_service.service;

import com.civicpulse.notification_service.entity.Notification;
import com.civicpulse.notification_service.repository.NotificationRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NotificationService {

    private final NotificationRepository repository;

    public NotificationService(NotificationRepository repository) {
        this.repository = repository;
    }

    public Notification save(Notification notification) {
        return repository.save(notification);
    }

    public List<Notification> getNotifications(Long citizenId) {
        return repository.findByCitizenIdOrderByCreatedAtDesc(citizenId);
    }

    public Notification markAsRead(Long id) {
        Optional<Notification> notification = repository.findById(id);

        if (notification.isPresent()) {
            Notification n = notification.get();
            n.setRead(true);
            return repository.save(n);
        }

        return null;
    }
}