package ma.emsi.backend_webdelivery.repository;

import ma.emsi.backend_webdelivery.entities.Commande;
import ma.emsi.backend_webdelivery.entities.Panier;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommandeRepository extends JpaRepository<Commande,Long>
{
    Commande findCommandeById(int id);
    Commande findCommandeByPanier(Panier panier);
}
