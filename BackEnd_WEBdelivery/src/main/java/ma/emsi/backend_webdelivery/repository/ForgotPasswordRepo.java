package ma.emsi.backend_webdelivery.repository;


import ma.emsi.backend_webdelivery.entities.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ForgotPasswordRepo extends JpaRepository<Client, Long> {
    Client findByEmail(String email);
    Client findByToken(String token);
}