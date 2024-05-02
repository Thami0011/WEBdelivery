//package ma.emsi.backend_webdelivery.web;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("/commandes")
//@CrossOrigin(origins = "http://localhost:5173")
//public class CommandeController {
//
//    @Autowired
//    private CommandeService commandeService;
//
//    @PostMapping("/commander")
//    public ResponseEntity<String> confirmerCommande(@RequestBody String username) {
//        try {
//            username = username.replaceAll("\"", "");  // Clean up the username string
//            System.out.println("Processing order for username: " + username);
//            double prixTotal = commandeService.CalculerPrix(username);
//            return ResponseEntity.ok("Order confirmed with total price: " + prixTotal);
//        } catch (Exception e) {
//            System.err.println("Error processing order: " + e.getMessage());
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed to process order: " + e.getMessage());
//        }
//    }
//}
