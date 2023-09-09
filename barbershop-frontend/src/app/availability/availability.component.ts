import { Service } from './../models/service.model';
import { Barber } from './../models/barber.model';
import { Booking } from './../models/booking.model';
import { BookingService } from './../services/booking.service';
import { Component } from '@angular/core';
import {
  NgbDate,
  NgbCalendar,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})
export class AvailabilityComponent {
  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate;
  toDate: NgbDate | null = null;
  bookings: Booking[] = [];

  constructor(calendar: NgbCalendar, private bookingService: BookingService) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }
 
  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return (
      this.fromDate &&
      !this.toDate &&
      this.hoveredDate &&
      date.after(this.fromDate) &&
      date.before(this.hoveredDate)
    );
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return (
      date.equals(this.fromDate) ||
      (this.toDate && date.equals(this.toDate)) ||
      this.isInside(date) ||
      this.isHovered(date)
    );
  }

  isDisabled(date: NgbDate) {
    
    /*
    if (!this.bookings || this.bookings.length === 0) {
      return false; // or return true, depending on your logic
    }
    this.bookings.some((booking) => {
      const bookingDate = new Date(booking.dateTime);
    });
    */

    const d = new Date(date.year, date.month - 1, date.day); // Month needs to be zero-based (0 = January, 1 = February, ...)

    // Check if the day is 13th of the month, Sunday (0), or Saturday (6)
    return date.day === 1 && date.month === 9;
  }

  handleBooking(): void {
    const barber = new Barber('kristjan', 'kristjank96@gmail.com', 53495814, 6);
    const service = new Service('', 0, 0);

    const booking = new Booking(
      barber,
      '',
      '',
      '',
      new Date(this.fromDate.year, this.fromDate.month, this.fromDate.day),
      true
    );

    this.bookingService.addBooking(booking).subscribe(
      (response) => {
        console.log('Booking added successfully:', response);
      },
      (error) => {
        console.error('Error adding booking:', error);
      }
    );
  }
}
