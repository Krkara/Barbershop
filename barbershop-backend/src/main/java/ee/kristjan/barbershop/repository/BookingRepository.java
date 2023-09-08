package ee.kristjan.barbershop.repository;

import ee.kristjan.barbershop.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long> {
    List<Booking> findBookingsByAvailableIsTrue();
    List<Booking> findBookingsByAvailableIsFalse();

    List<Booking> findBookingsByBarberId(Long barberId);
}
