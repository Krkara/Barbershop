import { Router } from '@angular/router';
import { BookingService } from './../../services/booking.service';
import { Booking } from './../../models/booking.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-maintain-bookings',
  templateUrl: './maintain-bookings.component.html',
  styleUrls: ['./maintain-bookings.component.css']
})
export class MaintainBookingsComponent {
  bookings: Booking[] = [];

  constructor(private bookingService: BookingService, private router: Router) {}

  ngOnInit() { 
    this.bookingService.getBookedBookings().subscribe(res => 
      this.bookings = res
    );
  }
  
  deleteBooking(booking: Booking) {
    this.bookingService.deleteBooking(booking).subscribe(res => 
      this.bookings = res
    );
  }

  navigateToHomePage() {
    this.router.navigate(['/']); // Use '/' to navigate to the root path (home page)
  }
}
