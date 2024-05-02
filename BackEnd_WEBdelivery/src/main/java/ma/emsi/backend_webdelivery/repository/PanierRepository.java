package ma.emsi.backend_webdelivery.repository;

import ma.emsi.backend_webdelivery.entities.Client;
import ma.emsi.backend_webdelivery.entities.Panier;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PanierRepository extends JpaRepository<Panier,Long>
{
    Panier findPanierByClient(Client client); //?
}
