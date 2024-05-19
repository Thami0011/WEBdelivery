package ma.emsi.backend_webdelivery.web;

import ma.emsi.backend_webdelivery.DTO.LivreurCommandeDTO;
import ma.emsi.backend_webdelivery.entities.Client;
import ma.emsi.backend_webdelivery.entities.Commande;
import ma.emsi.backend_webdelivery.entities.Livreur;
import ma.emsi.backend_webdelivery.repository.CommandeRepository;
import ma.emsi.backend_webdelivery.repository.LivreurRepository;
import ma.emsi.backend_webdelivery.service.CalculerRoute;
import ma.emsi.backend_webdelivery.service.LivreurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

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

    // La liste des livreurs connectes
    public static List<Long> LivreursCon=new ArrayList<>();

    @PostMapping("/LoginLivreur")
    public ResponseEntity<?> login(@RequestBody Livreur livreur)
    {
        Livreur liveur1=livreurRepository.findLivreurByUsername(livreur.getUsername());
        if(liveur1 !=null)
        {
            System.out.println(liveur1.getUsername() + " is connected.");
            liveur1.setLocalisation(calculateLocationForLivreur());
            livreurRepository.save(liveur1);
            LivreursCon.add(liveur1.getId());
            System.out.println(liveur1.getLocalisation());
            System.out.println("Livreurs Connectes : " + LivreursCon);
            return ResponseEntity.ok(liveur1);

        }
        else
        {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }

    private String calculateLocationForLivreur()
    {
        // Limites géographiques de Casablanca Maarif
        double minLatitude = 33.55;
        double maxLatitude = 33.58;
        double minLongitude = -7.63;
        double maxLongitude = -7.66;

        // Générer des coordonnées aléatoires dans les limites de Casablanca Maarif
        double latitude = minLatitude + (Math.random() * (maxLatitude - minLatitude));
        double longitude = minLongitude + (Math.random() * (maxLongitude - minLongitude));

        return latitude + "," + longitude;
    }


    @PostMapping("/RegisterLivreur")
    public ResponseEntity<?> register(@RequestBody Livreur liv)
    {
        Livreur liv1=livreurRepository.findLivreurByUsername(liv.getUsername());
        if(liv1==null)
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

    @PostMapping("/commandes")
    public ResponseEntity<Commande> commandes(@RequestBody String username) {
        livreurService.affectercomandesLivreur();
        System.out.println(username + " has been affected commande " + livreurRepository.findLivreurByUsername(username).getCommandeId());
        return ResponseEntity.ok(commandeRepository.findCommandesById(livreurRepository.findLivreurByUsername(username).getCommandeId()));
    }


    @PostMapping("/confirmerCommande")
    public ResponseEntity<?> confirmerCommande(@RequestBody LivreurCommandeDTO json) {
        try {
            Livreur livreur=livreurRepository.findLivreurByUsername(json.getUsername());
            livreur.setDispo(true);
            Commande commande = commandeRepository.findCommandesById(livreur.getCommandeId());
            commande.setLivree(true);
            System.out.println("Commande livrée");
            return ResponseEntity.ok("Livraison Confirmee");
        }
        catch (Exception e){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }

    }


}
