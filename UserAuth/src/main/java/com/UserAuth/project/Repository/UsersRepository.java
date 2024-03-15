package com.UserAuth.project.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.UserAuth.project.Entity.Users;

public interface UsersRepository extends JpaRepository<Users, Integer> {
//	@Query("Select * from User u where u.email=?1")
  Users findByEmail(String email);
}
