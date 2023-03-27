package hamzehsamhouri.hammyandfitch.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import hamzehsamhouri.hammyandfitch.models.LoginUser;
import hamzehsamhouri.hammyandfitch.models.Product;
import hamzehsamhouri.hammyandfitch.models.User;
import hamzehsamhouri.hammyandfitch.services.ProductService;
import hamzehsamhouri.hammyandfitch.services.UserService;

@Controller
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    ProductService productService;

    // !HOMEPAGE
    @GetMapping("/")
    public String index() {
        return "user/homepage.jsp";
    }

    // ! LOGIN FORM RENDER (login.jsp)
    @GetMapping("/login")
    public String login(Model model) {
        model.addAttribute("newLogin", new LoginUser()); // login user model add attribute
        return "user/login.jsp";
    }

    // ! REGISTRATION FORM RENDER (register.jsp)
    @GetMapping("/register")
    public String register(Model model) {
        model.addAttribute("newUser", new User()); // new user model add attribute
        return "user/register.jsp";
    }

    // ! REGISTRATION FORM HANDLE
    @PostMapping("/register")
    public String register(@Valid @ModelAttribute("newUser") User newUser,
            BindingResult result, Model model, HttpSession session) {

        User user = userService.register(newUser, result); // sends form to service

        if (result.hasErrors()) {
            model.addAttribute("newLogin", new LoginUser());
            return "user/register.jsp";
        }
        session.setAttribute("userId", user.getId()); // session check
        session.setAttribute("user", user); // user information render
        return "redirect:/";
    }

    // ! LOGIN FORM HANDLE
    @PostMapping("/login")
    public String login(@Valid @ModelAttribute("newLogin") LoginUser newLogin,
            BindingResult result, Model model, HttpSession session) {

        User user = userService.login(newLogin, result); // sends form to service

        if (result.hasErrors()) {
            model.addAttribute("newUser", new User());
            return "user/login.jsp";
        }
        session.setAttribute("userId", user.getId()); // session check
        session.setAttribute("user", user); // user information render
        return "redirect:/";
    }

    // ! MENS CLOTHING (mensclothing.jsp)
    @GetMapping("/mensclothing")
    public String mensclothing(Model model) {
        List<Product> products = productService.getAllProducts();
        model.addAttribute("products", products);
        return "user/mensclothing.jsp";
    }

    // ! MENS CLOTHING (womensclothing.jsp)
    @GetMapping("/womensclothing")
    public String womensclothing(Model model) {
        List<Product> products = productService.getAllProducts();
        model.addAttribute("products", products);
        return "user/womensclothing.jsp";
    }

    // ! READ ONE (show.jsp)
    @GetMapping("/products/{id}")
    public String show(@PathVariable("id") Long id, Model model) {
        Product product = productService.getOneProduct(id);
        model.addAttribute("product", product);
        return "user/show.jsp";
    }

    // !PROMOTION (promotion.jsp)
    @GetMapping("/promotion")
    public String promotion() {
        return "user/promotion.jsp";
    }


//! BORROW 
@GetMapping("/products/{id}/purchase")
public String borrowProduct(@PathVariable("id")Long id, HttpSession session ){
    Product product = productService.getOneProduct(id);
    product.setShopper(userService.findById((Long)session.getAttribute("userId")));
    productService.updateProduct(product);
    return "redirect:/cart";
}

//! RETURN
@GetMapping("/products/{id}/return")
public String returnProduct(@PathVariable("id") Long id) {
    Product product = productService.getOneProduct(id);
    product.setShopper(null);
    productService.updateProduct(product);
    return "redirect:/cart";
}

    // !CART (cart.jsp)
    @GetMapping("/cart")
    public String cart(Model model, HttpSession session) {
        User user = (User) session.getAttribute("user");
        List<Product> products = productService.findProductsByUser(user);
        model.addAttribute("products", products);
        System.out.println(products);
        return "user/cart.jsp";
    }

    // ! LOGOUT
    @GetMapping("/logout")
    public String clear_session(HttpSession session) {
        session.invalidate();
        return "redirect:/";
    }
}