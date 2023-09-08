import { Barber } from './barber.model';
import { Service } from './service.model';
export class Booking {
    constructor(
      public barber: Barber,
      public customerName: string,
      public customerPhoneNumber: string,
      public customerEmail: string,
      public dateTime: Date,
      public available: boolean,
      public service?: Service,
      public id?: number,
    ) {}
  }