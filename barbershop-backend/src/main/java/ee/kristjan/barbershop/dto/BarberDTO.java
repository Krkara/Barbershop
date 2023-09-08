package ee.kristjan.barbershop.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BarberDTO {
    private Long id;
    private String name;
    private String email;
    private int phoneNumber;
    private boolean admin;

    // Constructors, getters, and setters as needed
}
