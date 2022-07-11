package com.alvaroitu.ce.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alvaroitu.ce.model.Cadem;
import com.alvaroitu.ce.repositories.CademRepository;
import com.alvaroitu.ce.services.exceptions.ObjectNotFoundException;

@Service
public class CademService {

	@Autowired
	private CademRepository repository;

	public Cadem findById(Integer id) {
		Optional<Cadem> obj = repository.findById(id);
		return obj.orElseThrow(() -> new ObjectNotFoundException(
				"Objeto não encontrado!!! Id: " + id + ", Tipo: " + Cadem.class.getName()));

	}

	public List<Cadem> findAll() {
		List<Cadem> list = repository.findAll();
		return list;
	}

	public Cadem create(Cadem obj) {
		obj.setId(null);
		return repository.save(obj);
	}

	public void delete(Integer id) {
		repository.deleteById(id);
	}

	public Cadem update(Integer id, Cadem obj) {
		Cadem newObj = findById(id);
		newObj.setCnpj(obj.getCnpj());
		newObj.setRazaoSocial(obj.getRazaoSocial());
		newObj.setNomeFantasia(obj.getNomeFantasia());
		newObj.setApelido(obj.getApelido());
		newObj.setTelefone(obj.getTelefone());
		newObj.setEmail(obj.getEmail());
		newObj.setCnaeSecaoDescricao(obj.getCnaeSecaoDescricao());		
		return repository.save(newObj);

	}

}
