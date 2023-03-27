package hamzehsamhouri.hammyandfitch.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import hamzehsamhouri.hammyandfitch.models.Admin;

public interface AdminRepository extends CrudRepository<Admin, Long> {
    Optional<Admin> findByEmail(String email);
}
