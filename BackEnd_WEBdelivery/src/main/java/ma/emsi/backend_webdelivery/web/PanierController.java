package ma.emsi.backend_webdelivery.web;


import ma.emsi.backend_webdelivery.entities.Client;
import ma.emsi.backend_webdelivery.entities.Plat;
import ma.emsi.backend_webdelivery.repository.ClientRepository;
import ma.emsi.backend_webdelivery.repository.PlatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:5173/")
public class PanierController {
    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private PlatRepository platRepository;

    @PostMapping("/Panier")
    public ResponseEntity<?> ajouterPanier(@RequestBody Plat plat, @RequestBody Client client)
    {
        clientRepository.findClientsByUsername(client.getUsername()).getPanier().add(plat);
        return ResponseEntity.ok("Ajoute au Panier");
    }
}
