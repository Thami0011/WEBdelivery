package ma.emsi.backend_webdelivery.entities;

import jakarta.persistence.*;
import java.util.ArrayList;

@Entity
public class Panier {
    @Id @GeneratedValue( strategy = GenerationType.IDENTITY)
    private int id;
    @OneToMany
    private ArrayList<Plat> plats;
    @OneToOne
    private Client client;
}
