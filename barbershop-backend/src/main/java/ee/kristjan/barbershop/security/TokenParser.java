package ee.kristjan.barbershop.security;

import com.google.common.net.HttpHeaders;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Component // JwtAuthFilter
@Log4j2
public class TokenParser extends BasicAuthenticationFilter {
    @Value("${security.key}")
    private String securityKey;

    public TokenParser(@Lazy AuthenticationManager authenticationManager) {
        super(authenticationManager);
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws IOException, ServletException {
        String requestToken = request.getHeader(HttpHeaders.AUTHORIZATION);
        log.info(requestToken);

        if (requestToken != null &&
                requestToken.startsWith("Bearer")) {
            requestToken = requestToken.replace("Bearer ", "");

            Claims claims = Jwts.parserBuilder()
                    .setSigningKey(Keys.hmacShaKeyFor(Decoders.BASE64.decode(securityKey)))
                    .build()
                    .parseClaimsJws(requestToken)
                    .getBody();

            String personId = claims.getSubject();
            boolean isAdmin = Boolean.parseBoolean(claims.getAudience());
            log.info("Decoded JWT Claims: " + claims.toString());
            log.info("Is Admin: " + isAdmin);

            List<GrantedAuthority> authorities = new ArrayList<>();
            if (isAdmin) {
                GrantedAuthority authority = new SimpleGrantedAuthority("admin");
                authorities.add(authority);
            }

            Authentication authentication = new UsernamePasswordAuthenticationToken(personId, null, authorities);
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }

        super.doFilterInternal(request, response, chain); // DEFAULT
    }
}
