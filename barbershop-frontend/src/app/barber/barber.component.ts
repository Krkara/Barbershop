import { BookingService } from '../services/booking.service';
import { BarberService } from '../services/barber.service';
import { Barber } from './../models/barber.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-barber',
  templateUrl: './barber.component.html',
  styleUrls: ['./barber.component.css'],
})
export class BarberComponent {
  barbers: Barber[] = [];
  selectedBarber: Barber | null = null;

  constructor(private barberService: BarberService, private bookingService: BookingService) {}

  ngOnInit() {
    this.barberService.getBarbers().subscribe((data: Barber[]) => {
      this.barbers = data;
    });
  }

  getSelectedBarber(): Barber | null {
    return this.selectedBarber;
  }

  setSelectedBarber(barber: Barber): void {
    this.selectedBarber = barber;
    this.bookingService.setSelectedBarber(barber);
  }
}
