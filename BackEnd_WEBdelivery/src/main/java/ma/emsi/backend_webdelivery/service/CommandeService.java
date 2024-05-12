package ma.emsi.backend_webdelivery.service;


import ma.emsi.backend_webdelivery.entities.Client;
import ma.emsi.backend_webdelivery.entities.Commande;
import ma.emsi.backend_webdelivery.entities.Panier;
import ma.emsi.backend_webdelivery.entities.Plat;
import ma.emsi.backend_webdelivery.repository.ClientRepository;
import ma.emsi.backend_webdelivery.repository.CommandeRepository;
import ma.emsi.backend_webdelivery.repository.PanierRepository;
import ma.emsi.backend_webdelivery.repository.PlatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CommandeService
{
    @Autowired
    private CommandeRepository commandeRepository;
    @Autowired
    private ClientRepository clientRepository;
    @Autowired
    private PanierRepository panierRepository;
    @Autowired
    private PlatRepository platRepository;


    public void AddPanierToCommande(Client client,double prix)
    {
        List<String> nomPlats = new ArrayList<>();
        for (Long id: client.getPanier().getPlats())
        {
            nomPlats.add(platRepository.findPlatById(id).getNom());
        }
        commandeRepository.save(new Commande(null,client.getUsername(), prix,nomPlats,false));
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
