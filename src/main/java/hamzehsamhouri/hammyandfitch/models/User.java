package hamzehsamhouri.hammyandfitch.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty(message = "first name is required")
    private String first_name;

    @NotEmpty(message = "last name is required")
    private String last_name;

    @Email(regexp = ".+[@].+[\\.].+", message = "please enter a valid email")
    private String email;

    
    @NotEmpty(message = "password is required")
    private String password;

    @Transient
    @NotEmpty(message = "passwords must match")
    private String confirm_password;


//! ONE TO MANY RELATIONSHIP 
//!(user to shopper products)
    @OneToMany(mappedBy = "shopper", fetch = FetchType.LAZY)
    private List<Product> purchasedProducts;

//! EMPTY CONSTRUCTOR
    public User() {}

//! GETTERS AND SETTERS

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirst_name() {
        return this.first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return this.last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getConfirm_password() {
        return this.confirm_password;
    }

    public void setConfirm_password(String confirm_password) {
        this.confirm_password = confirm_password;
    }

    public List<Product> getPurchasedProducts() {
        return this.purchasedProducts;
    }

    public void setPurchasedProducts(List<Product> purchasedProducts) {
        this.purchasedProducts = purchasedProducts;
    }

//! CONVERT TO STRING
    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", first_name='" + getFirst_name() + "'" +
            ", last_name='" + getLast_name() + "'" +
            ", email='" + getEmail() + "'" +
            ", password='" + getPassword() + "'" +
            ", confirm_password='" + getConfirm_password() + "'" +
            "}";
    }
}