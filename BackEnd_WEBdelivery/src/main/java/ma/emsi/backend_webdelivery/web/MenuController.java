package ma.emsi.backend_webdelivery.web;


import ma.emsi.backend_webdelivery.entities.Menu;
import ma.emsi.backend_webdelivery.entities.Plat;
import ma.emsi.backend_webdelivery.repository.MenuRepository;
import ma.emsi.backend_webdelivery.repository.PlatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173/")
public class MenuController {
    @Autowired
    private MenuRepository menuRepository;

    @Autowired
    private PlatRepository platRepository;


    @GetMapping("/Menu")
    List<Menu> menus() {
        return menuRepository.findAll();
    }

    @GetMapping("/Plat")
    List<Plat> plats(@RequestParam(required = false) String menu) {
        if (menu != null) {
            return (platRepository.findPlatsByMenuId(menuRepository.findMenuByNom(menu).getId()));
        }
        return platRepository.findAll();

    }
}

