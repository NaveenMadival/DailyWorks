package com.UserAuth.project.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.UserAuth.project.Entity.Users;
import com.UserAuth.project.Repository.UsersRepository;

@Controller
public class UserController {
	
	@Autowired
	private UsersRepository repo;

	@GetMapping("/")
	public String ViewHomePage() {
		return "Index";
	}
	
	@GetMapping("/register")
	public String register(Model model) {
		model.addAttribute("Users", new Users());
		return "sign_up";
	}
	@PostMapping("/processRegister")
	public String process_register( Users user) {
		repo.save(user);
		return "register_sucess";
	}
	
}
