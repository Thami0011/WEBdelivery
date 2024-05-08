package ma.emsi.backend_webdelivery.service;

import ma.emsi.backend_webdelivery.entities.Menu;
import ma.emsi.backend_webdelivery.entities.Plat;
import ma.emsi.backend_webdelivery.repository.MenuRepository;
import ma.emsi.backend_webdelivery.repository.PlatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
public class MenuService
{
    @Autowired
    private MenuRepository menuRepository;

    @Autowired
    private PlatRepository platRepository;

    @Autowired
    private PlatService platService;

    void AddMenu(Menu menu)
    {
        menuRepository.save(menu) ;
    }

    void AddPlatToMenu(Menu m , Plat p)
    {
        Menu menu=menuRepository.findMenuByNom(m.getNom());
        Plat plat=platRepository.findPlatByNom(p.getNom());
        menu.getPlats().add(plat);
    }
}
