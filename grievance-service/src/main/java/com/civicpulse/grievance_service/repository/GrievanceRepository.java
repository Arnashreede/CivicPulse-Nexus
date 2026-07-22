package com.civicpulse.grievance_service.repository;

import com.civicpulse.grievance_service.entity.Grievance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface GrievanceRepository extends JpaRepository<Grievance, Long> {

    List<Grievance> findByAssignedOfficer(String assignedOfficer);
    List<Grievance> findByCitizenId(Long citizenId);
    long countByStatus(String status);

long countByStatusIgnoreCase(String status);
List<Grievance> findByCitizenIdAndStatusIn(
        Long citizenId,
        List<String> statuses
);
boolean existsByCitizenIdAndStatusIn(
        Long citizenId,
        List<String> statuses
);
long countByAssignedOfficerAndStatusIn(
        String assignedOfficer,
        List<String> statuses
);
}