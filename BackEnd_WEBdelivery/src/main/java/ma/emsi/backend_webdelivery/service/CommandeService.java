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

import java.util.ArrayList;
import java.util.List;

@Service
public class CommandeService
{
    @Autowired
    private CommandeRepository commandeRepository;
    @Autowired
    private ClientRepository clientRepository;
    @Autowired
    private PanierRepository panierRepository;


    public void AddPanierToCommande(Client client,double prix)
    {
        commandeRepository.save(new Commande(null,client.getUsername(), prix));
        client.getPanier().getPlats().clear();
        panierRepository.save(client.getPanier());
        clientRepository.save(client);
    }

    public List<Commande> HistoriqueCommande(Client client)
    {
        List<Commande> historique = new ArrayList<>();
        historique.addAll(commandeRepository.findCommandesByUsername(client.getUsername()));
        return historique;
    }

}
