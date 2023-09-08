package ee.kristjan.barbershop.repository;

import ee.kristjan.barbershop.entity.Barber;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BarberRepository extends JpaRepository<Barber, Long>{
    Barber findByEmail(String email);
}
