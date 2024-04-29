package ma.emsi.backend_webdelivery.web;



import ma.emsi.backend_webdelivery.repository.ClientRepository;
import ma.emsi.backend_webdelivery.repository.PlatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "http://localhost:5173/")
public class PanierController {
    private  Long s_id;
    private  String s_username;
    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private PlatRepository platRepository;

    @PostMapping("/AddidPanier")
    public Long ajouteridPanier(@RequestBody Long id) {
        s_id = id;
        return id;
    }


    @PostMapping("/AdduserPanier")
    public String ajouteruserPanier(@RequestBody String username) {
        s_username = username.replaceAll("\"", "");
        return s_username;
    }

    @PostMapping("/ajouterPanier")
    public void ajouterPanier(){
        Long id = ajouteridPanier(s_id);
        String username = ajouteruserPanier(s_username);
        clientRepository.findClientsByUsername(username).getPanier().add(platRepository.findPlatById(id));
        System.out.println(clientRepository.findClientsByUsername(username).getPanier().toString());
        clientRepository.save(clientRepository.findClientsByUsername(username));
    }

    @PostMapping("/Panier")
    public ResponseEntity<?> Panier()
    {
        return new ResponseEntity<>(clientRepository.findClientsByUsername(s_username).getPanier(), HttpStatus.OK);
    }
}
