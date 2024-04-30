package ma.emsi.backend_webdelivery.service;
import ma.emsi.backend_webdelivery.entities.Client;
import ma.emsi.backend_webdelivery.entities.Commande;
import ma.emsi.backend_webdelivery.entities.Plat;
import ma.emsi.backend_webdelivery.repository.ClientRepository;
import ma.emsi.backend_webdelivery.repository.CommandeRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;


import java.util.ArrayList;
import java.util.List;

@Component
public class CommandeService
{

    private ClientRepository clientRepository;
    private CommandeRepository commandeRepository;


    public CommandeService(ClientRepository c, CommandeRepository cm   )
    {
        this.clientRepository = c;
        this.commandeRepository = cm;

    }

    public double CalculerPrix(String username)
    {
        Client client = clientRepository.findClientsByUsername(username);
        List<Plat> plats = client.getPanier();
        double total = 0.0;
        for (Plat plat : plats)
        {
            total += plat.getPrix();
        }
        Commande commande = new Commande();
        commande.setClient(client);
        commande.setPanier(plats);
        commande.setPrixTotal(total);
        commande.setTraitee(false);

        commandeRepository.save(commande);
        client.setPanier(new ArrayList<Plat>());
        clientRepository.save(client);
        return total;
    }
}
