package ma.emsi.backend_webdelivery.entities;

import jakarta.persistence.*;

@Entity
public class Commande {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @OneToOne
    private Panier panier;
}
