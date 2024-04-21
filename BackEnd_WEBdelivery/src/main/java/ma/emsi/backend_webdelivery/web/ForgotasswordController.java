package ma.emsi.backend_webdelivery.web;

import ma.emsi.backend_webdelivery.service.ForgotPasswordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173/")
@RestController
public class ForgotasswordController {
    @Autowired
    private ForgotPasswordService service;

    @PostMapping("/forgot-password")
    public String forgotPass(@RequestParam String email){
        String response = service.forgotPass(email);

        if(!response.startsWith("Invalid")){
            response= "http://localhost:8085/reset-password?token=" + response;
        }
        return response;
    }

    @PutMapping("/reset-password")
    public String resetPass(@RequestParam String token, @RequestParam String password){
        return service.resetPass(token,password);
    }

}
