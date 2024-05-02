package ma.emsi.backend_webdelivery.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Panier {
    @Id @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToMany
    private List<Plat> plats;
    @OneToOne
    private Client client;
}
