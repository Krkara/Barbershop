package ee.kristjan.barbershop.configuration;

import ee.kristjan.barbershop.security.TokenParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    TokenParser tokenParser;

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
        return configuration.getAuthenticationManager();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception {
        return httpSecurity
                .cors().and().headers().xssProtection().disable().and()
                .csrf().disable()
                .authorizeHttpRequests(requests -> requests
                        .requestMatchers("/login").permitAll()
                        .requestMatchers("/signup").permitAll()
                        .requestMatchers("/bookings").permitAll()
                        /*
                        .requestMatchers(HttpMethod.GET,"/barbers").permitAll()
                        .requestMatchers(HttpMethod.POST,"/barbers").hasAuthority("admin")
                        .requestMatchers(HttpMethod.DELETE,"/barbers").hasAuthority("admin")
                        .requestMatchers(HttpMethod.PUT,"/barbers").hasAuthority("admin")

                        .requestMatchers(HttpMethod.GET,"/services").permitAll()
                        .requestMatchers(HttpMethod.POST,"/services").hasAuthority("admin")
                        .requestMatchers(HttpMethod.DELETE,"/services").hasAuthority("admin")
                        .requestMatchers(HttpMethod.PUT,"/services").hasAuthority("admin")

                        .requestMatchers(HttpMethod.GET,"/maintain-bookings").authenticated()
                        .requestMatchers(HttpMethod.GET,"/maintain-barbers").authenticated()
                        .requestMatchers(HttpMethod.GET,"/maintain-services").authenticated()

                           */
                        .anyRequest().permitAll()
                )
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .addFilterBefore(tokenParser, BasicAuthenticationFilter.class)
                .build();
    }
}
