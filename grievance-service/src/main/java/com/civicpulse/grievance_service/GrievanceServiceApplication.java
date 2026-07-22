package com.civicpulse.grievance_service;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.kafka.annotation.EnableKafka;
@EnableFeignClients
@EnableKafka
@SpringBootApplication
public class GrievanceServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(GrievanceServiceApplication.class, args);
    }
}


