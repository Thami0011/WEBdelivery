package ma.emsi.backend_webdelivery.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;



@Entity
@Data
public class Commande {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToMany
    @JoinTable(
            name = "commande_plat",
            joinColumns = @JoinColumn(name = "commande_id"),
            inverseJoinColumns = @JoinColumn(name = "plat_id")
    )
    private List<Plat> panier;

    @ManyToOne
    @JoinColumn(name = "client_id")
    private Client client;

    private boolean traitee;
    private double prixTotal;
}
