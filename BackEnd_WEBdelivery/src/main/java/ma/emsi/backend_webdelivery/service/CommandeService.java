package ma.emsi.backend_webdelivery.service;


import ma.emsi.backend_webdelivery.entities.Client;
import ma.emsi.backend_webdelivery.entities.Commande;
import ma.emsi.backend_webdelivery.entities.Panier;
import ma.emsi.backend_webdelivery.entities.Plat;
import ma.emsi.backend_webdelivery.repository.ClientRepository;
import ma.emsi.backend_webdelivery.repository.CommandeRepository;
import ma.emsi.backend_webdelivery.repository.PanierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommandeService
{
    @Autowired
    private CommandeRepository commandeRepository;
    @Autowired
    private ClientRepository clientRepository;



    public void AddPanierToCommande(Client client,double prix)
    {
        commandeRepository.save(new Commande(null,client.getPanier(), prix));
        Client client1 = clientRepository.findClientsByUsername(client.getUsername());
        client1.setPanier(new Panier());
        clientRepository.save(client1);
    }


}
