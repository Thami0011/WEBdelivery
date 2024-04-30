package ma.emsi.backend_webdelivery.repository;

import ma.emsi.backend_webdelivery.entities.Commande;
import ma.emsi.backend_webdelivery.entities.Livreur;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommandeRepository extends JpaRepository<Commande,Long>
{
    Commande findCommandeById(Long id);

}
