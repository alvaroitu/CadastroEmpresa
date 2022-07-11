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
		Cadem ce1 = new Cadem(null, "12.123.123/0001-12", "Aquilo lá daquele jeito", "Aquele bar", "Barzinho", "(11) 91234-1234", "bar@gamal.com", "Eventos");
		Cadem ce2 = new Cadem(null, "12.123.123/1234-12", "Vamos nessa", "Sai da Frente que aí vem gente", "Comercio local", "(81) 91234-4321", "comercio@gamal.com", "Comercio");

		cademRepository.saveAll(Arrays.asList(ce1, ce2));
	}

}
