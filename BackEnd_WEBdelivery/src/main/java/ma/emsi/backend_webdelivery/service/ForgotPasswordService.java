package ma.emsi.backend_webdelivery.service;

import ma.emsi.backend_webdelivery.entities.Client;
import ma.emsi.backend_webdelivery.repository.ForgotPasswordRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Service
public class ForgotPasswordService {
    private static final long EXPIRE_TOKEN = 30; // Durée d'expiration du token en minutes

    @Autowired
    private ForgotPasswordRepo repo;

    public String forgotPass(String email){
        Optional<Client> userOptional = Optional.ofNullable(repo.findByEmail(email));

        if (!userOptional.isPresent()) {
            return "Identifiant de courriel invalide.";
        }

        Client client = userOptional.get();
        client.setToken(generateToken());
        client.setTokenCreationDate(LocalDateTime.now());

        client = repo.save(client);
        return client.getToken();
    }

    public String resetPass(String token, String password){
        Optional<Client> userOptional = Optional.ofNullable(repo.findByToken(token));

        if (!userOptional.isPresent()) {
            return "Jeton invalide.";
        }

        LocalDateTime tokenCreationDate = userOptional.get().getTokenCreationDate();

        if (isTokenExpired(tokenCreationDate)) {
            return "Jeton expiré.";
        }

        Client client = userOptional.get();
        client.setPassword(password);
        client.setToken(null);
        client.setTokenCreationDate(null);

        repo.save(client);

        return "Votre mot de passe a été mis à jour avec succès.";
    }

    private String generateToken() {
        StringBuilder token = new StringBuilder();
        return token.append(UUID.randomUUID().toString())
                .append(UUID.randomUUID().toString()).toString();
    }

    private boolean isTokenExpired(final LocalDateTime tokenCreationDate) {
        LocalDateTime now = LocalDateTime.now();
        Duration diff = Duration.between(tokenCreationDate, now);
        return diff.toMinutes() >= EXPIRE_TOKEN;
    }
}
