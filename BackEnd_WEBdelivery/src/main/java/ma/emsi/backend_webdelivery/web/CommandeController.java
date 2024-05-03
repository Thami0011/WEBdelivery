package ma.emsi.backend_webdelivery.web;


import ma.emsi.backend_webdelivery.DTO.DTOCommande;
import ma.emsi.backend_webdelivery.entities.Client;
import ma.emsi.backend_webdelivery.entities.Commande;
import ma.emsi.backend_webdelivery.repository.ClientRepository;
import ma.emsi.backend_webdelivery.service.CommandeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:5173/")
public class CommandeController
{
    @Autowired
    private CommandeService commandeService;
    @Autowired
    private ClientRepository clientRepository;

    @PostMapping("/commander")
    public void Commander(@RequestBody DTOCommande JSON)
    {
        Client client = clientRepository.findClientsByUsername(JSON.getUsername());
        double prix = Double.parseDouble(JSON.getTotal());
        commandeService.AddPanierToCommande(client,prix);
    }


    @PostMapping("/Historique")
    public List<Commande> Historique(@RequestBody String username)
    {

        return commandeService.HistoriqueCommande(clientRepository.findClientsByUsername(username));
    }
}