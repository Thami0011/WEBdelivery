package ma.emsi.backend_webdelivery.service;

import ma.emsi.backend_webdelivery.entities.Livreur;
import ma.emsi.backend_webdelivery.repository.LivreurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LivreurService
{
    @Autowired
    private LivreurRepository livreurRepository;

    public void AddLivreur(Livreur livreur)
    {
        livreurRepository.save(livreur);
    }
}
