package hamzehsamhouri.hammyandfitch.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hamzehsamhouri.hammyandfitch.models.Product;
import hamzehsamhouri.hammyandfitch.models.User;
import hamzehsamhouri.hammyandfitch.repositories.ProductRepository;

@Service
public class ProductService {
    @Autowired ProductRepository productRepository;

//!CREATE
    public void createProduct (Product product) {
        productRepository.save(product);
    }

//!READ ALL
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

//!READ ONE
    public Product getOneProduct(Long id){
        Optional<Product> optionalproduct = productRepository.findById(id);
        Product product = optionalproduct.orElse(null);
        return product;
    }

//!UPDATE
    public void updateProduct (Product product) {
        productRepository.save(product);
    }

//!DELETE
    public void deleteProduct(Product product) {
        productRepository.delete(product);
    }

//! Find Products By User
    public List<Product> findProductsByUser(User user) {
        return productRepository.findAllByShopper(user);
    }
}
