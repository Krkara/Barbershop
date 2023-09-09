import { Booking } from './../models/booking.model';
import { BookingService } from './../services/booking.service';
import { Subscription } from 'rxjs';
import { Service } from './../models/service.model';
import { Barber } from './../models/barber.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  selectedBarber: Barber | undefined;
  barberSubscription: Subscription | undefined;
  selectedService: Service | undefined;
  serviceSubscription: Subscription | undefined;
  selectedDate: Date | undefined;
  dateSubscription: Subscription | undefined;
  customerName: string = '';
  customerNumber: string = '';
  customerEmail: string = '';
  showSuccessAlert: boolean = false;

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.barberSubscription = this.bookingService
      .getSelectedBarber()
      .subscribe((barber) => {
        this.selectedBarber = barber;
      });
    this.serviceSubscription = this.bookingService
      .getSelectedService()
      .subscribe((service) => {
        this.selectedService = service;
      });
    this.dateSubscription = this.bookingService
      .getSelectedDate()
      .subscribe((date) => {
        this.selectedDate = date;
      });
  }

  ngOnDestroy(): void {}

  isButtonVisible(): boolean {
    return (
      !!this.selectedBarber && !!this.selectedService && !!this.selectedDate
    );
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

    if (
      this.selectedBarber !== undefined &&
      this.selectedService !== undefined &&
      this.selectedDate !== undefined
    ) {
      const booking = new Booking(
        this.selectedBarber,
        this.customerName,
        this.customerNumber,
        this.customerEmail,
        new Date(),
        false,
        this.selectedService
      );
      this.bookingService.addBooking(booking).subscribe(
        (response) => {
          console.log('Booking added successfully:', response);
          this.customerName = '';
          this.customerNumber = '';
          this.customerEmail = '';

          this.showSuccessAlert = true;
          setTimeout(() => {
            this.showSuccessAlert = false;
          }, 1000);
        },
        (error) => {
          console.error('Error adding booking:', error);
        }
      );
    }
  }
}
