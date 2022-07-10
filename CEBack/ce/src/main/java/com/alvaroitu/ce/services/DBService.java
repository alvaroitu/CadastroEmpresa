package com.alvaroitu.ce.services;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alvaroitu.ce.model.Cadem;
import com.alvaroitu.ce.repositories.CademRepository;

@Service
public class DBService {

	@Autowired
	private CademRepository cademRepository;

	public void instanciaBandoDados() {
		Cadem ce1 = new Cadem(null, "22333222", "aquila lá daquel jeito", "aquele bar", "barzinho", "222-222", "bar@gamal.com", "A.2.34");
		Cadem ce2 = new Cadem(null, "55555555", "aquila lá daquel jeito", "aquele bar", "barzinho", "222-222", "bar@gamal.com", "A.2.34");

		cademRepository.saveAll(Arrays.asList(ce1, ce2));
	}

}
