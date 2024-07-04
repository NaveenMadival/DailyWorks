package com.ms.project.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.ms.project.Entity.Person;
import com.ms.project.Service.PersonService;

@RestController
@RequestMapping("/person")
public class PersonController {

	@Autowired
	PersonService service;
	
	@GetMapping("/test")
	public String test()
	{
		return "Hello";
	}
	
	@GetMapping
	public Person personDataById(@RequestParam int personId)
	{
		return service.personData(personId);
	}
	
	@GetMapping("/list")
	public List<Person> allPersonData()
	{
		return service.personAllData();
	}
	
	@PostMapping
	public Person updateRecords(@RequestParam int id, @RequestParam String fname)
	{
		return service.updateRecord(id, fname);
	}
}
