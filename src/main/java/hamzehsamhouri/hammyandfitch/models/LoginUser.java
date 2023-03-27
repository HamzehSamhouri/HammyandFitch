package hamzehsamhouri.hammyandfitch.models;


public class LoginUser {
    private String email;
    private String password;

//! EMPTY CONSTRUCTOR
    public LoginUser() {}


//! GETTERS AND SETTERS
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
}

