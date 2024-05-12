package ma.emsi.backend_webdelivery.web;

import ma.emsi.backend_webdelivery.entities.Client;
import ma.emsi.backend_webdelivery.entities.Commande;
import ma.emsi.backend_webdelivery.entities.Livreur;
import ma.emsi.backend_webdelivery.repository.CommandeRepository;
import ma.emsi.backend_webdelivery.repository.LivreurRepository;
import ma.emsi.backend_webdelivery.service.LivreurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5174/")
public class LivreurController
{
    @Autowired
    private LivreurRepository livreurRepository;
    @Autowired
    private LivreurService livreurService;
    @Autowired
    private CommandeRepository commandeRepository;

    @PostMapping("/LoginLivreur")
    public ResponseEntity<?> login(@RequestBody Livreur livreur)
    {
        Livreur liveur1=livreurRepository.findLivreurByUsername(livreur.getUsername());
        if(liveur1 !=null)
        {
            System.out.println(liveur1.getUsername() + " is connected.");
            return ResponseEntity.ok(liveur1);
        }
        else
        {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }

    @PostMapping("/RegisterLivreur")
    public ResponseEntity<?> register(@RequestBody Livreur liv)
    {
        Livreur liv1=livreurRepository.findLivreurByUsername(liv.getUsername());
        if(liv1==null )
        {
            livreurService.AddLivreur(liv);
            System.out.println(liv.getUsername() + " has been added");
            return ResponseEntity.ok(liv);
        }
        else
        {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }

    @GetMapping("/commandes")
    public List<Commande> commandes(){
        return commandeRepository.findCommandesByLivree(false);
    }
}
