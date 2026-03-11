package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import entity.User;
import service.UserService;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    // Sign Up
    @PostMapping("/signup")
    public ResponseEntity<?> signUp(@RequestBody User user) {
        return ResponseEntity.ok(userService.registerUser(user));
    }

    // Sign In
    @PostMapping("/signin")
    public ResponseEntity<?> signIn(@RequestBody User user) {
        return userService.loginUser(user.getEmail(), user.getPassword())
                .map(u -> ResponseEntity.ok("Login Successful"))
                .orElse(ResponseEntity.status(401).body("Invalid email or password"));
    }
}