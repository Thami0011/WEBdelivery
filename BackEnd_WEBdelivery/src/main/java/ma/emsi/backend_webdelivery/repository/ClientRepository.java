package ma.emsi.backend_webdelivery.repository;

import ma.emsi.backend_webdelivery.entities.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Integer>
{
    Client findClientsByUsername(String userName);



}