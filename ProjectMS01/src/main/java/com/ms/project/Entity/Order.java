package com.ms.project.Entity;

import jakarta.persistence.*;

@Table(name = "orders")
@Entity
public class Order 
{
	
	@Id
	@Column(name = "order_id")
	private int orderId;
	
	@Column(name = "ord_date")
	private String ordDate;
	
	@Column(name = "purch_amt")
	private int purchAmt;
	
	@ManyToOne(fetch = FetchType.LAZY)
	private Person person;

	public Order() {
		super();
	}

	public Order(int orderId, String ordDate, int purchAmt) {
		super();
		this.orderId = orderId;
		this.ordDate = ordDate;
		this.purchAmt = purchAmt;
	}

	public int getOrderId() {
		return orderId;
	}

	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}

	public String getOrdDate() {
		return ordDate;
	}

	public void setOrdDate(String ordDate) {
		this.ordDate = ordDate;
	}

	public int getPurchAmt() {
		return purchAmt;
	}

	public void setPurchAmt(int purchAmt) {
		this.purchAmt = purchAmt;
	}

	public Person getPerson() {
		return person;
	}

	public void setPerson(Person person) {
		this.person = person;
	}
	
	
	
}
