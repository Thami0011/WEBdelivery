package ma.emsi.backend_webdelivery.web;

import ma.emsi.backend_webdelivery.entities.Commande;
import ma.emsi.backend_webdelivery.repository.ClientRepository;
import ma.emsi.backend_webdelivery.repository.CommandeRepository;
import ma.emsi.backend_webdelivery.service.CommandeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:5173/")
public class CommandeController
{
    @Autowired
    private CommandeService commandeService ;
    @Autowired

    private PanierController panierController;
    @Autowired
    private ClientRepository clientRepository;
    @PostMapping("/Commander")
    public void ConfirmerCommande(@RequestBody String username)
    {
        System.out.println(clientRepository.findClientsByUsername(username));
        System.out.println(username);
        commandeService.CalculerPrix(username.replaceAll("\"", "").toString());


    }



}
