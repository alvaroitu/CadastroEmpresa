package com.alvaroitu.ce.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.alvaroitu.ce.model.Cadem;

@Repository
public interface CademRepository extends JpaRepository<Cadem, Integer>{

}
