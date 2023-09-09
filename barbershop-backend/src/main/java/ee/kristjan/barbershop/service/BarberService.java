package ee.kristjan.barbershop.service;

import ee.kristjan.barbershop.dto.BarberDTO;
import ee.kristjan.barbershop.entity.Barber;
import ee.kristjan.barbershop.repository.BarberRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BarberService {
    @Autowired
    BarberRepository barberRepository;

    @Autowired
    ModelMapper modelMapper;

    public List<BarberDTO> findAllBarbers() {
        List<Barber> barbers = barberRepository.findAll();
        List<BarberDTO> barberDTOs = new ArrayList<>();
        for (Barber b: barbers) {
            BarberDTO barberDTO = modelMapper.map(b, BarberDTO.class);
            barberDTOs.add(barberDTO);
        }
        return barberDTOs;
    }
}
