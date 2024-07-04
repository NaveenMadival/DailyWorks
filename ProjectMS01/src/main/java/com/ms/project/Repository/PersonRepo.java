package com.ms.project.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ms.project.Entity.Person;

public interface PersonRepo extends JpaRepository<Person, Integer>{

}
