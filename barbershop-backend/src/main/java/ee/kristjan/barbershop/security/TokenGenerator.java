package ee.kristjan.barbershop.security;

import ee.kristjan.barbershop.dto.security.AuthToken;
import ee.kristjan.barbershop.entity.Barber;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class TokenGenerator {
    @Value("${security.key}")
    private String securityKey;

    public AuthToken getToken(Barber barber) {
        AuthToken authToken = new AuthToken();

        Date expiration = new Date(System.currentTimeMillis() + 1000 * 60 * 20);
        authToken.setExpiration(expiration);

        String jwtToken = Jwts.builder()
                .signWith(Keys.hmacShaKeyFor(Decoders.BASE64.decode(securityKey)), SignatureAlgorithm.HS512)
                .setIssuer("Mihkel's webshop")
                .setExpiration(expiration)
                .setSubject(barber.getId().toString())
                .setAudience(String.valueOf(barber.isAdmin()))
                .compact();

        authToken.setToken(jwtToken);

        return authToken;
    }
}
