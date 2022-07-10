package com.alvaroitu.ce.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.alvaroitu.ce.model.Cadem;
import com.alvaroitu.ce.services.CademService;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/home")
public class CademController {
	
	@Autowired
	private CademService service;
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Cadem> findById(@PathVariable Integer id) {
		Cadem obj = service.findById(id);
		return ResponseEntity.ok().body(obj);

	}

	@GetMapping(value = "/vizualizacaolista")
	public ResponseEntity<List<Cadem>> listAll() {
		List<Cadem> list = service.findAll();
		return ResponseEntity.ok().body(list);

	}

	@PostMapping
	public ResponseEntity<Cadem> create(@RequestBody Cadem obj) {
		obj = service.create(obj);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
		return ResponseEntity.created(uri).build();

	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> delete(@PathVariable Integer id) {
		service.delete(id);
		return ResponseEntity.noContent().build();

	}

	@PutMapping(value = "/{id}")
	public ResponseEntity<Cadem> update(@PathVariable Integer id, @RequestBody Cadem obj) {
		Cadem newObj = service.update(id, obj);
		return ResponseEntity.ok().body(newObj);

	}
	
	

}
