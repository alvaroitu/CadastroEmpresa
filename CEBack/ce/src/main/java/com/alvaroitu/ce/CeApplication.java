package com.alvaroitu.ce;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@EntityScan(basePackages = "com.alvaroitu.ce.model")
@SpringBootApplication
public class CeApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(CeApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub

	}

}
