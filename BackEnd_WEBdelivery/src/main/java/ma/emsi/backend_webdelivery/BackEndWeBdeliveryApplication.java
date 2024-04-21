package ma.emsi.backend_webdelivery;

import ma.emsi.backend_webdelivery.entities.Client;
import ma.emsi.backend_webdelivery.entities.Menu;
import ma.emsi.backend_webdelivery.entities.Plat;
import ma.emsi.backend_webdelivery.repository.ClientRepository;

import ma.emsi.backend_webdelivery.repository.MenuRepository;
import ma.emsi.backend_webdelivery.repository.PlatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class BackEndWeBdeliveryApplication implements CommandLineRunner {
	@Autowired
	private MenuRepository menuRepository;
	public static void main(String[] args) {
		SpringApplication.run(BackEndWeBdeliveryApplication.class, args);


	}

	@Override
	public void run(String... args) throws Exception
	{

		System.out.println(menuRepository.findMenuByNom("Burgers").getPlats().toString());

	}
}
