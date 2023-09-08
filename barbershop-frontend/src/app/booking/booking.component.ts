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
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent {
  displayMonths = 3;
	navigation = 'select';
	showWeekNumbers = false;
	outsideDays = 'visible';

  selectedDate: NgbDate | null = null;

  onDateSelect(date: NgbDate | null) {
    if (date !== null) {
      // The selected date is in the 'date' parameter
      console.log('Selected Date:', date);
      // You can also access the individual parts of the date:
      console.log('Year:', date.year);
      console.log('Month:', date.month);
      console.log('Day:', date.day);
    } else {
      console.log('Date cleared');
    }
  }
}
