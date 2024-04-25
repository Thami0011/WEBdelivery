package ma.emsi.backend_webdelivery.repository;

import ma.emsi.backend_webdelivery.entities.Plat;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PlatRepository extends JpaRepository<Plat,Long> {
    Plat findPlatByNom(String nom);
    List<Plat> findPlatsByMenuId(Long menuId);
}
