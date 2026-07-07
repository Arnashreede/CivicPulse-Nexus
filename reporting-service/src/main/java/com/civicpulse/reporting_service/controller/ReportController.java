package com.civicpulse.reporting_service.controller;

import com.civicpulse.reporting_service.entity.CitizenReport;
import com.civicpulse.reporting_service.service.ReportService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reports")
public class ReportController {

    private final ReportService reportService;

    public ReportController(ReportService reportService) {
        this.reportService = reportService;
    }

    @GetMapping("/citizens")
    public List<CitizenReport> getAllCitizens() {
        return reportService.getAllCitizens();
    }

    @GetMapping("/citizens/count")
    public long getCitizenCount() {
        return reportService.getCitizenCount();
    }
}