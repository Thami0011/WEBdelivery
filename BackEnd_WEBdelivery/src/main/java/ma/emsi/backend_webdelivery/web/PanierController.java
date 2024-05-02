package ma.emsi.backend_webdelivery.web;


import ma.emsi.backend_webdelivery.entities.Plat;
import ma.emsi.backend_webdelivery.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173/")
public class PanierController
{
    @Autowired
    private ClientRepository clientRepository;

    @PostMapping("/Panier")
    public List<Plat> Panier(@RequestBody String username)
    {
        System.out.println("Acces au panier pour " + username);
        return clientRepository.findClientsByUsername(username).getPanier().getPlats();
    }

}