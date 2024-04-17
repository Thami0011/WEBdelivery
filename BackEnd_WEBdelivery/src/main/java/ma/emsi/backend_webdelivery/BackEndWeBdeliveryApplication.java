package ma.emsi.backend_webdelivery;

import ma.emsi.backend_webdelivery.entities.Client;
import ma.emsi.backend_webdelivery.repository.ClientRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackEndWeBdeliveryApplication implements CommandLineRunner {
	@Autowired
	private ClientRepository clientRepository;
	public static void main(String[] args) {
		SpringApplication.run(BackEndWeBdeliveryApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {


	}
}
