package ma.emsi.backend_webdelivery.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;



@Entity
@Data
public class Commande {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToMany
    private List<Plat> panier = new ArrayList<Plat>();
    @ManyToOne
    private Client client;
    private boolean traitee;
    private double prixTotal;
}
