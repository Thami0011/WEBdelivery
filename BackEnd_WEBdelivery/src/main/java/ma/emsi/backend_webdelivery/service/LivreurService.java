package ma.emsi.backend_webdelivery.service;

import ma.emsi.backend_webdelivery.entities.Commande;
import ma.emsi.backend_webdelivery.entities.Livreur;
import ma.emsi.backend_webdelivery.repository.CommandeRepository;
import ma.emsi.backend_webdelivery.repository.LivreurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


import static ma.emsi.backend_webdelivery.web.LivreurController.LivreursCon;


@Service
public class LivreurService
{
    @Autowired
    private LivreurRepository livreurRepository;
    @Autowired
    private CommandeRepository commandeRepository;


    public void AddLivreur(Livreur livreur)
    {
        livreurRepository.save(livreur);
    }

    public void affectercomandesLivreur()
    {
       double minDistance =9999;
       Livreur livProche = null;
        for (Long id : LivreursCon)
        {
           Livreur livreur = livreurRepository.findLivreurById(id);
           if(livreur.isDispo())
           {
               if (CalculerRoute.calculateRoute(livreur.getLocalisation()) < minDistance )
               {
                   minDistance = CalculerRoute.calculateRoute(livreur.getLocalisation());
                   System.out.println(minDistance);
                   livProche = livreur;
               }
               List<Commande> comdispo = commandeRepository.findCommandesByAffectee(false);
               if (!comdispo.isEmpty())
               {
                   livProche.setCommandeId(comdispo.get(0).getId());
               }
               livProche.setDispo(false);
               livreurRepository.save(livProche);
               comdispo.get(0).setAffectee(true);
               commandeRepository.save(comdispo.get(0));
           }


       }
    }
}

