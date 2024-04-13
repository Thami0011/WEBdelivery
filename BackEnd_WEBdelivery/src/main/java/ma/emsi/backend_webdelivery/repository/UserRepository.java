package ma.emsi.backend_webdelivery.repository;

import ma.emsi.backend_webdelivery.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer>
{
    User findUsersByUsername(String userName);
}