package hamzehsamhouri.hammyandfitch.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="products")
public class Product {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
    @NotEmpty(message="Gender is required")
	private String gender;

	@NotEmpty(message="Title cannot be blank")
	private String title;
	
	@NotEmpty(message="Category is required")
	private String category;
	
	@Min(0)
    @NotNull(message="Price is required")
	private Integer price;

	@NotEmpty(message="Description is required")
	private String description;
    
	@Min(0)
    @NotNull(message="Quantity is required")
	private Integer inventory;
    
	@NotEmpty(message="Primary image is required")
	private String primaryimage;

	private String secondimage;

	private String thirdimage;

	@Column(updatable=false)
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date createdAt;
    
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date updatedAt;

//! MANY TO ONE RELATIONSHIPS 
//!(products to admin)
@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="admin_id")
    private Admin admin;

//! (products to shopper)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "shopper_id")
    private User shopper;

//! EMPTY CONSTRUCTOR
    public Product() {
    }

//! GETTERS AND SETTERS

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getGender() {
        return this.gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCategory() {
        return this.category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Integer getPrice() {
        return this.price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getInventory() {
        return this.inventory;
    }

    public void setInventory(Integer inventory) {
        this.inventory = inventory;
    }

    public String getPrimaryimage() {
        return this.primaryimage;
    }

    public void setPrimaryimage(String primaryimage) {
        this.primaryimage = primaryimage;
    }

    public String getSecondimage() {
        return this.secondimage;
    }

    public void setSecondimage(String secondimage) {
        this.secondimage = secondimage;
    }

    public String getThirdimage() {
        return this.thirdimage;
    }

    public void setThirdimage(String thirdimage) {
        this.thirdimage = thirdimage;
    }

    public Date getCreatedAt() {
        return this.createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return this.updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

    public Admin getAdmin() {
        return this.admin;
    }

    public void setAdmin(Admin admin) {
        this.admin = admin;
    }

    public User getShopper() {
        return this.shopper;
    }

    public void setShopper(User shopper) {
        this.shopper = shopper;
    }

}