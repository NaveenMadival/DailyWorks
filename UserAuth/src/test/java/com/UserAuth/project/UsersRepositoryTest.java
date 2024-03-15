package com.UserAuth.project;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;

import com.UserAuth.project.Entity.Users;
import com.UserAuth.project.Repository.UsersRepository;

@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Rollback(false)
public class UsersRepositoryTest 
{
	@Autowired
	private UsersRepository ur;
	
	@Autowired
	private TestEntityManager tem;
	
	@Test
	public void testCreateUser() {
		Users user = new Users();
		user.setPassword("abcd");
		user.setEmail("naveen@gmail.com");
		user.setFirstName("Naveen");
		user.setLastName("Madiwal");
		
		Users saveUser =ur.save(user);
		
		Users existUsers=tem.find(Users.class, saveUser.getId());
		
		assertThat(existUsers.getEmail()).isEqualTo(user.getEmail());
	}
	
	@Test 
	public void testFindUserByEmail() {
		String email="naen@gmail.com";
		Users users= ur.findByEmail(email);
		assertThat(users).isNotNull();
	}
}
