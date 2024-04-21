package ma.emsi.backend_webdelivery.service;


import lombok.AllArgsConstructor;
import ma.emsi.backend_webdelivery.entities.Plat;
import ma.emsi.backend_webdelivery.repository.PlatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class PlatService
{
    @Autowired
    private PlatRepository platRepository;
    void AddPlat(Plat p)
    {
        platRepository.save(p);
    }
}
