package ma.emsi.backend_webdelivery.repository;

import ma.emsi.backend_webdelivery.entities.Livreur;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LivreurRepository extends JpaRepository<Livreur,Long>
{
    Livreur findLivreurByUsername(String username);
}
