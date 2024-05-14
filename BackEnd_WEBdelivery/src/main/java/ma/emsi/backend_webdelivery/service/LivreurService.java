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



    public List<Commande> findCommandesForLivreur(String username)
    {

        Livreur livreur = livreurRepository.findLivreurByUsername(username);

        double minDistance = 9999;
        Livreur livProche = null;

        for (Long id : LivreursCon)
        {
            Livreur currentLivreur = livreurRepository.findById(id).orElse(null);
            if (currentLivreur != null)
            {
                double loc = CalculerRoute.calculateRoute(currentLivreur.getLocalisation());
                if (loc < minDistance)
                {
                    minDistance = loc;
                    livProche = currentLivreur;
                }
            }
        }

        if (livProche != null)
        {
            List<Long> nonAffecteesIds = commandeRepository.findCommandeByLivreeAndAffectee(0)
                    .stream()
                    .map(Commande::getId)
                    .collect(Collectors.toList());

            livProche.getCommandeId().addAll(nonAffecteesIds);
            livreurRepository.save(livProche);
        }

        List<Commande> listCom = new ArrayList<>();
        for (Long id : livreur.getCommandeId()) {
            Commande commande = commandeRepository.findById(id).orElse(null);
            if (commande != null) {
                listCom.add(commande);
            }
        }
        System.out.println("list " +listCom);
        return listCom;
    }

}

