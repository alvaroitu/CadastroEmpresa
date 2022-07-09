package com.alvaroitu.ce;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

import com.alvaroitu.ce.model.Cadem;
import com.alvaroitu.ce.repositories.CademRepository;

@EntityScan(basePackages = "com.alvaroitu.ce.model")
@SpringBootApplication
public class CeApplication implements CommandLineRunner{
	
	@Autowired
	private CademRepository cademRepository;

	public static void main(String[] args) {
		SpringApplication.run(CeApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		
		Cadem ceee = new Cadem(null, "22333222", "aquele daquilo");
		
		cademRepository.saveAll(Arrays.asList(ceee));
		
		
	}

}
