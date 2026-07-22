package com.civicpulse.grievance_service.client;

import com.civicpulse.grievance_service.dto.OfficerDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name = "officer-service")
public interface OfficerClient {

    @GetMapping("/officers/department/{department}")
    List<OfficerDTO> getOfficersByDepartment(
            @PathVariable String department
    );
}