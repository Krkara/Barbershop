package ee.kristjan.barbershop.controller;

import ee.kristjan.barbershop.entity.Barber;
import ee.kristjan.barbershop.repository.BarberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/barbers")
public class BarberController {

    @Autowired BarberRepository barberRepository;

    @GetMapping
    public List<Barber> getBarbers() {
        return barberRepository.findAll();
    }

    @PostMapping
    public List<Barber> addBarber(@RequestBody Barber barber) {
        barberRepository.save(barber);
        return barberRepository.findAll();
    }

    @DeleteMapping("/{id}")
    public List<Barber> deleteBarber(@PathVariable Long id) {
        barberRepository.deleteById(id);
        return barberRepository.findAll();
    }

    @GetMapping("/{id}")
    public Barber getBarber(@PathVariable Long id) {
        return barberRepository.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public List<Barber> updateBarber(@PathVariable Long id, @RequestBody Barber barber) {
        if (barberRepository.existsById(id)) {
            barber.setId(barberRepository.findById(id).get().getId());
            barberRepository.save(barber);
        }
        return barberRepository.findAll();
    }
}
