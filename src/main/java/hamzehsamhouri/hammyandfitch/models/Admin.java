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
@Table(name = "admins")
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Email(regexp = ".+[@].+[\\.].+", message = "Please enter a valid email")
    private String email;

    @NotEmpty(message = "Password is required")
    private String password;

    @Transient
    @NotEmpty(message = "Passwords must match")
    private String confirm_password;


//! ONE TO MANY RELATIONSHIP 
//!(admin to products)
    @OneToMany(mappedBy = "admin", fetch = FetchType.LAZY)
    private List<Product> products;

//! EMPTY CONSTRUCTOR
    public Admin() {
    }


//! GETTERS AND SETTERS

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public List<Product> getProducts() {
        return this.products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }



//! CONVERT TO STRING
    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", email='" + getEmail() + "'" +
            ", password='" + getPassword() + "'" +
            ", confirm_password='" + getConfirm_password() + "'" +
            ", products='" + getProducts() + "'" +
            "}";
    }
}