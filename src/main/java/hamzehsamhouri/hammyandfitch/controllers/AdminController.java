package hamzehsamhouri.hammyandfitch.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import hamzehsamhouri.hammyandfitch.models.Admin;
import hamzehsamhouri.hammyandfitch.models.AdminLogin;
import hamzehsamhouri.hammyandfitch.models.Product;
import hamzehsamhouri.hammyandfitch.services.AdminService;
import hamzehsamhouri.hammyandfitch.services.ProductService;

@Controller
public class AdminController {

@Autowired ProductService productService;
@Autowired AdminService adminService;

//! LOGIN AND REGISTRATION FORM RENDER (adminloginandreg.jsp)
@GetMapping("/managerlogin")
public String index(Model model) {
    model.addAttribute("newAdmin", new Admin()); // new admin model add attribute
    model.addAttribute("newAdminLogin", new AdminLogin()); //login admin model add attribute
    return "adminuser/loginandreg.jsp";
}

//! REGISTRATION FORM HANDLE
@PostMapping("/adminregister")
public String register(@Valid @ModelAttribute("newAdmin") Admin newAdmin,
        BindingResult result, Model model, HttpSession session) {

    Admin admin = adminService.adminregister(newAdmin, result); //sends form to service 

    if (result.hasErrors()) {
        model.addAttribute("newAdminLogin", new AdminLogin());
        return "adminuser/loginandreg.jsp";
    }
    session.setAttribute("adminId", admin.getId()); //session check
    session.setAttribute("admin", admin); //user information render
    return "redirect:/managersite";
}

//! LOGIN FORM HANDLE
@PostMapping("/adminlogin")
public String login(@Valid @ModelAttribute("newAdminLogin") AdminLogin newAdminLogin,BindingResult result, Model model, HttpSession session) {

    Admin admin = adminService.adminlogin(newAdminLogin, result); //sends form to service

    if (result.hasErrors()) {
        model.addAttribute("newAdmin", new Admin());
        return "adminuser/loginandreg.jsp";
    }
    session.setAttribute("adminId", admin.getId()); //session check
    session.setAttribute("admin", admin); //user information render
    return "redirect:/managersite";
}

//! LOGOUT
@GetMapping("/adminlogout")
public String admin_clear_session(HttpSession session) {
    session.invalidate();
    return "redirect:/managerlogin";
}


//! READ ALL - MANAGER SITE RENDER (home.jsp)
    @GetMapping("/managersite")
    public String products(Model model, HttpSession session) {
        if(session.getAttribute("adminId") == null) {
        return "redirect:/managerlogin";
    }
        List<Product> products = productService.getAllProducts();
        model.addAttribute("products", products);
        return "adminuser/home.jsp";
    }

//! CREATE (new.jsp)
    @GetMapping("/products/new")
    public String newProduct(@ModelAttribute("product") Product product, HttpSession session) {
        if(session.getAttribute("adminId") == null) {
            return "redirect:/managerlogin";
        }
        return "adminuser/new.jsp";
    }
    @PostMapping("/products")
    public String createProduct(@Valid @ModelAttribute("product") Product product, BindingResult results) {
        if(results.hasErrors()) {
            return "/adminuser/new.jsp";
        } else {
            productService.createProduct(product);
            return "redirect:/managersite";
        }
    }

//! UPDATE (update.jsp)
    @GetMapping("/products/update/{id}")
    public String update(@PathVariable("id") Long id, Model model, HttpSession session) {
        if(session.getAttribute("adminId") == null) {
            return "redirect:/";
        }
        Product product = productService.getOneProduct(id);
        model.addAttribute("product", product);
        return "adminuser/update.jsp";
    }
    @PutMapping("/products/{id}")
    public String edit(@Valid @ModelAttribute("product") Product product, BindingResult results) {
        if (results.hasErrors()) {
            return "adminuser/update.jsp";
        } else {
            productService.updateProduct(product);
            return "redirect:/managersite";
        }
    }

//! DELETE
    @DeleteMapping("/products/delete/{id}")
    public String destroy(@PathVariable("id") Long id) {
        Product product = productService.getOneProduct(id);
        productService.deleteProduct(product);
        return "redirect:/managersite";
    }
}
