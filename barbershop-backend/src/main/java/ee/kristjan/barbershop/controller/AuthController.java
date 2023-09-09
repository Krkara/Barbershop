package ee.kristjan.barbershop.controller;

import ee.kristjan.barbershop.repository.BarberRepository;
import ee.kristjan.barbershop.security.TokenGenerator;
import ee.kristjan.barbershop.dto.security.AuthToken;
import ee.kristjan.barbershop.dto.security.LoginData;
import ee.kristjan.barbershop.entity.Barber;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {
    @Autowired
    BarberRepository barberRepository;

    // TokenParser     JwtAuthFilter
    // TokenGenerator   JwtAuthService
    @Autowired
    TokenGenerator tokenGenerator;

    @Autowired
    BCryptPasswordEncoder encoder;


    @PostMapping("login")
    public ResponseEntity<AuthToken> login(@RequestBody LoginData loginData) throws RuntimeException {
        // Login
        Barber barber = barberRepository.findByEmail(loginData.getPersonalCode());

        if (!encoder.matches(loginData.getPassword(),barber.getPassword())) {
            throw new RuntimeException(barber.getName());
        }

        return new ResponseEntity<>(tokenGenerator.getToken(barber), HttpStatus.OK);
    }

    @PostMapping("signup")
    public ResponseEntity<AuthToken> signup(@RequestBody Barber barber) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        barber.setPassword(encoder.encode(barber.getPassword()));
        Barber savedBarber = barberRepository.save(barber);
        return new ResponseEntity<>(tokenGenerator.getToken(savedBarber), HttpStatus.OK);
    }
}