package hamzehsamhouri.hammyandfitch.services;

import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import hamzehsamhouri.hammyandfitch.models.LoginUser;
import hamzehsamhouri.hammyandfitch.models.User;
import hamzehsamhouri.hammyandfitch.repositories.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

// ! REGISTER
    public User register(User newUser, BindingResult result) {
        //check if email already exists
        if (userRegistered(newUser.getEmail())) {
            result.rejectValue("email", "Email_Taken", "an account with that email already exists");
            return null;
        }
    //check if passwords match
        if (!newUser.getPassword().equals(newUser.getConfirm_password())) {
            result.rejectValue("confirm_password", "Confirm_Password", "Passwords must match");
            return null;
        }
    //error check
        if (result.hasErrors()) {
            return null;
        }
    //password hash
        String hashedpw = BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt());
        newUser.setPassword(hashedpw);

        return userRepository.save(newUser);
    }

// ! LOGIN
    public User login(LoginUser newLoginObject, BindingResult result) {
    //check if email exists in DB
        if (!userRegistered(newLoginObject.getEmail())) {
            result.rejectValue("email", "LoginEmail", "Invalid Email or Password");
            return null;
        }
        User user = findUserByEmail(newLoginObject.getEmail()); //call to get user's password from DB
        if (!BCrypt.checkpw(newLoginObject.getPassword(), user.getPassword())) {
            result.rejectValue("password", "LoginPassword", "Invalid Email or Password");
            return null;
        }
    //password check
        if (result.hasErrors()) {
            return null;
        }
        return user;
    }

//! EMAIL REPOSITORY CHECK (boolean)
    private boolean userRegistered(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        return user.isPresent();
    }

//! EMAIL REPOSITORY CHECK
    private User findUserByEmail(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        return user.orElse(null);
    }

//! USER ID REPOSITORY CHECK
    public User findById(Long id) {
        Optional<User> user = userRepository.findById(id);
        return user.orElse(null);
    }
}
