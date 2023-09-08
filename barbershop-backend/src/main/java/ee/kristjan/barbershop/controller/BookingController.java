package ee.kristjan.barbershop.controller;

import ee.kristjan.barbershop.repository.BookingRepository;
import ee.kristjan.barbershop.entity.Booking;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bookings")
public class BookingController {

    @Autowired
    BookingRepository bookingRepository;

    @GetMapping
    public List<Booking> getBookings() {
        return bookingRepository.findAll();
    }

    @PostMapping
    public List<Booking> addBooking(@RequestBody Booking booking) {
        bookingRepository.save(booking);
        return bookingRepository.findAll();
    }

    @DeleteMapping("/{id}")
    public List<Booking> deleteBooking(@PathVariable Long id) {
        bookingRepository.deleteById(id);
        return bookingRepository.findAll();
    }

    @GetMapping("/{id}")
    public Booking getBooking(@PathVariable Long id) {
        return bookingRepository.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public List<Booking> updateBooking(@PathVariable Long id, @RequestBody Booking booking) {
        if (bookingRepository.existsById(id)) {
            booking.setId(bookingRepository.findById(id).get().getId());
            bookingRepository.save(booking);
        }
        return bookingRepository.findAll();
    }

    @GetMapping("/barber/{id}")
    public List<Booking> getBarberBookings(@PathVariable Long id) {
        return bookingRepository.findBookingsByBarberId(id);
    }

    @GetMapping("/available")
    public List<Booking> getAvailableBookings() {
        return bookingRepository.findBookingsByAvailableIsTrue();
    }

    @GetMapping("/booked")
    public List<Booking> getBookedBookings() {
        return bookingRepository.findBookingsByAvailableIsFalse();
    }
}
