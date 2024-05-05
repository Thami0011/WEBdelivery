package ma.emsi.backend_webdelivery.web;

import jakarta.servlet.http.HttpSession;
import ma.emsi.backend_webdelivery.entities.Client;
import java.util.*;

import ma.emsi.backend_webdelivery.entities.Panier;
import ma.emsi.backend_webdelivery.entities.Plat;
import ma.emsi.backend_webdelivery.repository.ClientRepository;

import ma.emsi.backend_webdelivery.repository.PanierRepository;
import ma.emsi.backend_webdelivery.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "http://localhost:5173/")
public class AuthController {

    @Autowired
    private ClientRepository clientRepository;
    @Autowired
    private ClientService clientService;
    @Autowired
    private PanierRepository panierRepository;


    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Client user)
    {
        Client existingUser = clientRepository.findClientsByUsername(user.getUsername());
        if (existingUser != null && existingUser.getPassword().equals(user.getPassword()))
        {
            if (existingUser.getPanier() == null || existingUser.getPanier().getPlats() == null)
            {
                Panier panier = new Panier(null, new ArrayList<Long>(),existingUser);
                panierRepository.save(panier);
                existingUser.setPanier(panier);
                clientRepository.save(existingUser);
            }
            System.out.println(existingUser.getUsername() + " is connected.");
            return ResponseEntity.ok(existingUser);
        }
        else
        {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }

    @PostMapping("/Register")
    public ResponseEntity<?> register(@RequestBody Client client)
    {
        Client existingclient=clientRepository.findClientsByUsername(client.getUsername());
        if(existingclient==null )
        {
            clientService.AddClient(client);
            System.out.println(client.getUsername() + " has been added");
            return ResponseEntity.ok(client);
        }
        else
        {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }
}
