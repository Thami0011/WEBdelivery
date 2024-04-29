package ma.emsi.backend_webdelivery.entities;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Commande {
    @Id @GeneratedValue( strategy = GenerationType.IDENTITY )
    private Long Id;
    @OneToMany
    private List<Plat> Panier;
    @OneToOne
    private Client client;
    private boolean traitee;
}
