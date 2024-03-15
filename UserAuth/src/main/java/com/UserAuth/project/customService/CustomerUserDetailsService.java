package com.UserAuth.project.customService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.UserAuth.project.Entity.Users;
import com.UserAuth.project.Repository.UsersRepository;
import com.UserAuth.project.cutomDetail.CustomUserDetails;

public class CustomerUserDetailsService implements UserDetailsService{

	@Autowired
	private UsersRepository repo;
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		Users users= repo.findByEmail(email);
		if(users == null) {
			throw new UsernameNotFoundException(" User Notfound");
		}
		return new CustomUserDetails(users);
	}

}
