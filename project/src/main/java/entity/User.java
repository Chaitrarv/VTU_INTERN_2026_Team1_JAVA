package entity;

import org.jspecify.annotations.Nullable;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "users")
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String role; // e.g., ROLE_ADMIN, ROLE_INVESTOR

	public @Nullable CharSequence getPassword() {
		// TODO Auto-generated method stub
		return null;
	}

	public void setPassword(@Nullable String encode) {
		// TODO Auto-generated method stub
		
	}

	public String getEmail() {
		// TODO Auto-generated method stub
		return null;
	}
}