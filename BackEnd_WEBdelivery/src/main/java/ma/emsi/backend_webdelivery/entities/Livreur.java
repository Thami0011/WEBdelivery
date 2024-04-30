package ma.emsi.backend_webdelivery.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Data @NoArgsConstructor
@AllArgsConstructor
public class Livreur
{
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    private String Nom;
    private String Prenom;
    private String Email;
    private String Adresse;
    private String Telephone;
    private String username;
    @OneToMany
    private List<Commande> HistoriqueCommande;
}
