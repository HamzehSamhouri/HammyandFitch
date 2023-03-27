package hamzehsamhouri.hammyandfitch.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import hamzehsamhouri.hammyandfitch.models.Product;
import hamzehsamhouri.hammyandfitch.models.User;

public interface ProductRepository extends CrudRepository<Product, Long> {
    List<Product> findAll();
    List<Product> findAllByShopper(User shopper);
}