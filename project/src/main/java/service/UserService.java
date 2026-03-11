package service;

import org.jspecify.annotations.Nullable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import controller.UserRepository;
import entity.User;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // Sign Up
    public User registerUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    // Sign In
    public Optional<User> loginUser(String email, @Nullable CharSequence charSequence) {

        Optional<User> existingUser = userRepository.findByEmail(email);

        if (existingUser.isPresent() &&
            passwordEncoder.matches(charSequence, (@Nullable String) existingUser.get().getPassword())) {

            return existingUser;
        }

        return Optional.empty();
    }
}