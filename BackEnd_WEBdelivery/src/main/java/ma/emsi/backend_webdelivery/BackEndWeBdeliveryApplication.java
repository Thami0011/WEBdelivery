package ma.emsi.backend_webdelivery;

import ma.emsi.backend_webdelivery.entities.User;
import ma.emsi.backend_webdelivery.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackEndWeBdeliveryApplication implements CommandLineRunner {
	@Autowired
	private UserRepository userRepository;
	public static void main(String[] args) {
		SpringApplication.run(BackEndWeBdeliveryApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		userRepository.save(new User(null,"wissal","123","wissal@mail.ma"));
	}
}
