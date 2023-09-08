import { Booking } from './models/booking.model';
import { Service } from './models/service.model';
import { Barber } from './models/barber.model';
import { BookingService } from './services/booking.service';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'barbershop-frontend';
  selectedBarber: Barber | undefined;
  private barberSubscription: Subscription | undefined;
  selectedService: Service | undefined;
  private serviceSubscription: Subscription | undefined;
  customerName: string = '';
  customerNumber: string = '';
  customerEmail: string = '';
  showSuccessAlert: boolean = false;

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.barberSubscription = this.bookingService.getSelectedBarber().subscribe((barber) => {
      this.selectedBarber = barber;
    });
    this.serviceSubscription = this.bookingService.getSelectedService().subscribe((service) => {
      this.selectedService = service;
    });
  }

  ngOnDestroy(): void {
  }

  isButtonVisible(): boolean {
    return !!this.selectedBarber && !!this.selectedService;
  }

  handleBooking(): void {
    if (!this.customerName.trim()) {
      console.log('Customer name is required.');
      return; 
    }
    if (!this.customerEmail.trim()) {
      console.log('Customer email is required.');
      return; 
    }
    if (!this.customerNumber.trim()) {
      console.log('Customer number is required.');
      return; 
    }

    if (this.selectedBarber !== undefined &&
       this.selectedService !== undefined) {
      console.log("POST");
      const booking = new Booking(
        this.selectedBarber,
        this.customerName,
        this.customerNumber,
        this.customerEmail,
        new Date(),
        false,
        this.selectedService,
      );
      this.bookingService.addBooking(booking).subscribe(
        response => {
          console.log('Booking added successfully:', response);
          this.customerName = '';
          this.customerNumber = '';
          this.customerEmail = '';
  
          this.showSuccessAlert = true;
          setTimeout(() => {
            this.showSuccessAlert = false;
          }, 5000);
        },
        error => {
          console.error('Error adding booking:', error);
        });
    }
  }
}
