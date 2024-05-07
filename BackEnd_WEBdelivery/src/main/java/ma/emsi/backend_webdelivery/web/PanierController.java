package ma.emsi.backend_webdelivery.web;


import ma.emsi.backend_webdelivery.DTO.DTOPlat;
import ma.emsi.backend_webdelivery.entities.Client;
import ma.emsi.backend_webdelivery.entities.Plat;
import ma.emsi.backend_webdelivery.repository.ClientRepository;
import ma.emsi.backend_webdelivery.repository.PanierRepository;
import ma.emsi.backend_webdelivery.repository.PlatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173/")
public class PanierController
{
    @Autowired
    private ClientRepository clientRepository;
    @Autowired
    private PlatRepository platRepository;
    @Autowired
    private PanierRepository panierRepository;

    @PostMapping("/Panier")
    public List<Plat> Panier(@RequestBody String username)
    {
        System.out.println("Acces au panier pour " + username);
        ArrayList<Plat> panier = new ArrayList<Plat>();
        for (Long idPlat :clientRepository.findClientsByUsername(username).getPanier().getPlats())
        {
            panier.add(platRepository.findPlatById(idPlat));
        }
        return panier;
    }
    @PostMapping("/AddPlat")
    public void AjouterPlat (@RequestBody DTOPlat JSON)
    {
        Client client= clientRepository.findClientsByUsername(JSON.getUsername());
        Plat plat = platRepository.findPlatById(JSON.getPlatId());
        client.getPanier().getPlats().add(plat.getId());
        panierRepository.save(client.getPanier());
        clientRepository.save(client);
        System.out.println(client.getUsername() + " added " + plat.getNom() + " to panier.");
    }

    @PostMapping("/SupprimerPanier")
    public void SupprimerPlat(@RequestBody DTOPlat JSON)
    {
        Client client= clientRepository.findClientsByUsername(JSON.getUsername());
        Plat plat = platRepository.findPlatById(JSON.getPlatId());
        client.getPanier().getPlats().remove(plat.getId());
        panierRepository.save(client.getPanier());
        clientRepository.save(client);
        System.out.println(client.getUsername() + " removed " + plat.getNom() + " from panier.");

    }

}