package hamzehsamhouri.hammyandfitch.services;

import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import hamzehsamhouri.hammyandfitch.models.AdminLogin;
import hamzehsamhouri.hammyandfitch.models.Admin;
import hamzehsamhouri.hammyandfitch.repositories.AdminRepository;

@Service
public class AdminService {
    @Autowired
    private AdminRepository adminRepository;

    // ! ADMIN REGISTER
    public Admin adminregister(Admin newAdmin, BindingResult result) {
        //check if email already exists
        if (adminRegistered(newAdmin.getEmail())) {
            result.rejectValue("email", "Email_Taken", "an account with that email already exists");
            return null;
        }
    //check if passwords match
        if (!newAdmin.getPassword().equals(newAdmin.getConfirm_password())) {
            result.rejectValue("confirm_password", "Confirm_Password", "Passwords must match");
            return null;
        }
    //error check
        if (result.hasErrors()) {
            return null;
        }
    //password hash
        String hashedpw = BCrypt.hashpw(newAdmin.getPassword(), BCrypt.gensalt());
        newAdmin.setPassword(hashedpw);

        return adminRepository.save(newAdmin);
    }


// ! LOGIN
    public Admin adminlogin(AdminLogin newAdminLogin, BindingResult result) {
    //check if email exists in DB
        if (!adminRegistered(newAdminLogin.getEmail())) {
            result.rejectValue("email", "LoginEmail", "Invalid Email or Password");
            return null;
        }
        Admin admin = findAdminByEmail(newAdminLogin.getEmail()); //call to get admin's password from DB
        if (!BCrypt.checkpw(newAdminLogin.getPassword(), admin.getPassword())) {
            result.rejectValue("password", "LoginPassword", "Invalid Email or Password");
            return null;
        }
    //password check
        if (result.hasErrors()) {
            return null;
        }
        return admin;
    }

//! ADMIN EMAIL REPOSITORY CHECK (boolean)
    private boolean adminRegistered(String email) {
        Optional<Admin> admin = adminRepository.findByEmail(email);
        return admin.isPresent();
    }

//! ADMIN EMAIL REPOSITORY CHECK
    private Admin findAdminByEmail(String email) {
        Optional<Admin> admin = adminRepository.findByEmail(email);
        return admin.orElse(null);
    }

//! ADMIN ID REPOSITORY CHECK
    public Admin findById(Long id) {
        Optional<Admin> admin = adminRepository.findById(id);
        return admin.orElse(null);
    }
}
