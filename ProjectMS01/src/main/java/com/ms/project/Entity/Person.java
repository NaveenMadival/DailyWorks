package com.ms.project.Entity;
import java.util.List;

import jakarta.persistence.*;

@Entity
public class Person 
{
	
	@Id
	@Column(name = "person_id")
	private int personId;
	private String fname;
	private String lname;
	private String city;
	

	@OneToMany(mappedBy = "person", fetch = FetchType.LAZY, cascade = {CascadeType.ALL})
	private List<Order> orders;

	public Person() {
		super();
	}

	public Person(int personId, String fname, String lname, String city) {
		super();
		this.personId = personId;
		this.fname = fname;
		this.lname = lname;
		this.city = city;
	}

	public int getId() {
		return personId;
	}

	public void setId(int personId) {
		this.personId = personId;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public List<Order> getOrder() {
		return orders;
	}

	public void setOrder(List<Order> orders) {
		this.orders = orders;
	}
	
	
}
