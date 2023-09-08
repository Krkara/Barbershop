package ee.kristjan.barbershop.controller;

import ee.kristjan.barbershop.entity.Service;
import ee.kristjan.barbershop.repository.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/services")
public class ServiceController {

    @Autowired
    ServiceRepository serviceRepository;

    @GetMapping
    public List<Service> getServices() {
        return serviceRepository.findAll();
    }

    @PostMapping
    public List<Service> addService(@RequestBody Service service) {
        serviceRepository.save(service);
        return serviceRepository.findAll();
    }

    @DeleteMapping("/{id}")
    public List<Service> deleteService(@PathVariable Long id) {
        serviceRepository.deleteById(id);
        return serviceRepository.findAll();
    }

    @GetMapping("/{id}")
    public Service getService(@PathVariable Long id) {
        return serviceRepository.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public List<Service> updateService(@PathVariable Long id, @RequestBody Service service) {
        if (serviceRepository.existsById(id)) {
            service.setId(serviceRepository.findById(id).get().getId());
            serviceRepository.save(service);
        }
        return serviceRepository.findAll();
    }
}
