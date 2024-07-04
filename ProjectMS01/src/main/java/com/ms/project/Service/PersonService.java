package com.ms.project.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ms.project.Entity.Person;
import com.ms.project.Repository.PersonRepo;

@Service
public class PersonService {

	@Autowired
	PersonRepo repo;
	
	public Person personData(int id)
	{
		return repo.findById(id).get();
	}
	
	public List<Person> personAllData()
	{
		return repo.findAll();
	}
	
	public Person updateRecord(int id, String fname)
	{
		Person p = new Person();
		p.setId(id);
		p.setFname(fname);
		return repo.save(p);
	}
	
	
}
