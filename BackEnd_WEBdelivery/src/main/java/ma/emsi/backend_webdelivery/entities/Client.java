package ma.emsi.backend_webdelivery.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Client
{
    @Id @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Long Id;
    private String username;
    private String nom;
    private String password;
    private String email;
    private String Prenom;
    private String telephone;
    private String sexe;
    private String Adresse;
    @OneToMany
    private List<Plat> Panier;
    @OneToMany(mappedBy = "client", cascade = CascadeType.ALL)
    private List<Commande> historique;





}





