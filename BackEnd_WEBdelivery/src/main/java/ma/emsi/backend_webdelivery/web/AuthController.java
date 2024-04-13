package ma.emsi.backend_webdelivery.web;

import ma.emsi.backend_webdelivery.entities.Client;

import ma.emsi.backend_webdelivery.repository.ClientRepository;

import ma.emsi.backend_webdelivery.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
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
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Client user)
    {
        Client existingUser = clientRepository.findClientsByUsername(user.getUsername());
        if (existingUser != null && existingUser.getPassword().equals(user.getPassword()))
        {
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
            return ResponseEntity.ok(client);
        }
        else
        {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }


}
