package ma.emsi.backend_webdelivery.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.*;

@Entity
@NoArgsConstructor
@Data
@AllArgsConstructor
public class Menu {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private String description;
    private String photo;
    @OneToMany(mappedBy = "menu", fetch=FetchType.EAGER)
    @JsonBackReference
    private List<Plat> plats;
}


