package ma.emsi.backend_webdelivery.repository;

import ma.emsi.backend_webdelivery.entities.Menu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

@Component
public interface MenuRepository extends JpaRepository<Menu,Long>
{
     Menu findMenuByNom(String nom);
}
