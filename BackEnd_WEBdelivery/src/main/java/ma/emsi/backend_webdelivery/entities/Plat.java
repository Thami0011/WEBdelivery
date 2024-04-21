package ma.emsi.backend_webdelivery.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Data
@AllArgsConstructor
public class Plat

{
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Long id ;
    private String nom ;
    private String photo ;
    private double prix ;
    @ManyToOne
    private Menu menu;
    @Override
    public String toString() {
        return "Plat{" +
                "id=" + id +
                ", nom='" + nom + '\'' +
                ", photo='" + photo + '\'' +
                ", prix=" + prix +
                '}';
    }
}
