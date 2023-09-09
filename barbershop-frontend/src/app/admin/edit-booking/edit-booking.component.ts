import { ServiceService } from './../../services/service.service';
import { BarberService } from './../../services/barber.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Barber } from 'src/app/models/barber.model';
import { Booking } from 'src/app/models/booking.model';
import { Service } from 'src/app/models/service.model';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.css'],
})
export class EditBookingComponent implements OnInit {
  bookingId: number | null = null;
  booking: Booking | undefined;
  barbers: Barber[] = []; // Populate this array with available barbers
  services: Service[] = []; // Populate this array with available services

  constructor(
    private bookingService: BookingService,
    private barberService: BarberService, // Inject BarberService
    private serviceService: ServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.bookingId = Number(params.get('id'));
      if (this.bookingId) {
        this.bookingService.getBooking(this.bookingId).subscribe((booking) => {
          this.booking = booking;
        });
      }
    });

    // Load available barbers and services
    this.loadBarbers();
    this.loadServices();
  }

  loadBarbers(): void {
    // Implement a method to load available barbers from your service
    this.barberService.getBarbers().subscribe((barbers) => {
      this.barbers = barbers;
    });
  }

  loadServices(): void {
    // Implement a method to load available services from your service
    this.serviceService.getServices().subscribe((services) => {
      this.services = services;
    });
  }

  handleSubmit(): void {
    if (this.booking) {
      this.bookingService.editBookings(this.booking).subscribe(() => {
        this.router.navigate(['/maintain-bookings']);
      });
    }
  }
  
}
