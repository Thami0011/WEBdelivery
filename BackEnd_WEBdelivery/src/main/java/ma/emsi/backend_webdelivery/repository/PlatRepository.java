package ma.emsi.backend_webdelivery.repository;

import ma.emsi.backend_webdelivery.entities.Plat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlatRepository extends JpaRepository<Plat,Long> {
    Plat findPlatByNom(String nom);
}
