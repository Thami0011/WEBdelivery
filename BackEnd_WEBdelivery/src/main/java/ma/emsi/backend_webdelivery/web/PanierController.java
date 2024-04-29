package ma.emsi.backend_webdelivery.web;


import ma.emsi.backend_webdelivery.entities.Client;
import ma.emsi.backend_webdelivery.entities.Plat;
import ma.emsi.backend_webdelivery.repository.ClientRepository;
import ma.emsi.backend_webdelivery.repository.PlatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.annotation.RequestScope;

@RestController
@CrossOrigin(origins = "http://localhost:5173/")
public class PanierController {
    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private PlatRepository platRepository;

    @PostMapping("/AddPanier")
    public ResponseEntity<?> ajouterPanier(@RequestBody Long platId)
    {
        // clientRepository.findClientsByUsername(username).getPanier().add(platRepository.findPlatById(platId));
        System.out.println(platId);
        return ResponseEntity.ok("Ajoute au Panier");
    }
}
