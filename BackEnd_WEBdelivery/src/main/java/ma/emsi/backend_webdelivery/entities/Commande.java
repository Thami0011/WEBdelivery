package ma.emsi.backend_webdelivery.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.context.properties.bind.DefaultValue;

import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Commande
{
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private double prixTotal;
    @ElementCollection
    private List<String> plats;
    private boolean livree;
}