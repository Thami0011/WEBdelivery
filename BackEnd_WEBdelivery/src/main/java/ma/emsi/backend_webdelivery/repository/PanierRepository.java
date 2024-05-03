package ma.emsi.backend_webdelivery.repository;

import ma.emsi.backend_webdelivery.entities.Client;
import ma.emsi.backend_webdelivery.entities.Panier;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PanierRepository extends JpaRepository<Panier,Long>
{
    Panier findPanierByClient(Client client);
    List<Panier> findPaniersByClient(Client client);
}
