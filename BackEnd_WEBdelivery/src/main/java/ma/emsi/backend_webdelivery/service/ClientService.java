package ma.emsi.backend_webdelivery.service;

import ma.emsi.backend_webdelivery.entities.Client;
import ma.emsi.backend_webdelivery.repository.ClientRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


@Service
public class ClientService
{
    private ClientRepository clientRepository;
    public ClientService(ClientRepository clientRepository)
    {
        this.clientRepository=clientRepository;
    }

    public void AddClient(Client client)
    {
       clientRepository.save(client);
    }
}
