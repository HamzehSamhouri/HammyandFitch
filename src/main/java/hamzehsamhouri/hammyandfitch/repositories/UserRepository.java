package hamzehsamhouri.hammyandfitch.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import hamzehsamhouri.hammyandfitch.models.User;

public interface UserRepository extends CrudRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
