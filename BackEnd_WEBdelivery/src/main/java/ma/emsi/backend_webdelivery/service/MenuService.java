package ma.emsi.backend_webdelivery.service;

import ma.emsi.backend_webdelivery.entities.Menu;
import ma.emsi.backend_webdelivery.repository.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
public class MenuService
{
    @Autowired
    private MenuRepository menuRepository;

    void AddMenu(Menu menu)
    {
        menuRepository.save(menu) ;
    }

}
