package ma.emsi.backend_webdelivery.repository;

import ma.emsi.backend_webdelivery.entities.Commande;
import ma.emsi.backend_webdelivery.entities.Panier;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommandeRepository extends JpaRepository<Commande,Long>
{
    List<Commande> findCommandesByUsername(String username);
    List<Commande> findCommandesByLivree(boolean livree);
    Commande  findCommandesById(Long id);
    List<Commande> findCommandeByLivreeAndAffectee( int var);
}
