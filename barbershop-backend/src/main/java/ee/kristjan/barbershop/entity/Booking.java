package ee.kristjan.barbershop.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne()
    private Barber barber;
    @ManyToOne(optional = true)
    private Service service;
    private String customerName;
    private String customerPhoneNumber;
    private String customerEmail;
    private LocalDateTime dateTime;
    private boolean available;
}
