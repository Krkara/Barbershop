import { Booking } from './../models/booking.model';
import { HttpClient } from '@angular/common/http';
import { Barber } from '../models/barber.model';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Service } from '../models/service.model';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private url = environment.baseUrl + '/bookings';
  private selectedBarberSubject = new Subject<Barber | undefined>();
  private selectedServiceSubject = new Subject<Service | undefined>();
  private selectedDateSubject = new Subject<Date | undefined>(); 

  constructor(private httpClient: HttpClient) {}

  addBooking(booking: Booking) {
    return this.httpClient.post(this.url, booking);
  }

  deleteBooking(booking: Booking) {
    return this.httpClient.delete<Booking[]>(`${this.url}/${booking.id}`);
  }

  getBookings() {
    return this.httpClient.get<Booking[]>(this.url);
  }

  editBookings(booking: Booking) {
    return this.httpClient.put<void>(`${this.url}/${booking.id}`, booking);
  }

  getBooking(id: number): Observable<Booking> {
    return this.httpClient.get<Booking>(`${this.url}/${id}`);
  }

  getBarberBookings(barber: Barber) {
    return this.httpClient.get<Booking[]>(`${this.url}/barber/${barber.id}`);
  }

  getBookedBookings() {
    return this.httpClient.get<Booking[]>(`${this.url}/booked`);
  }

  setSelectedBarber(barber: Barber): void {
    this.selectedBarberSubject.next(barber);
  }

  getSelectedBarber(): Observable<Barber | undefined> {
    return this.selectedBarberSubject.asObservable();
  }

  setSelectedService(service: Service): void {
    this.selectedServiceSubject.next(service);
  }

  getSelectedService(): Observable<Service | undefined> {
    return this.selectedServiceSubject.asObservable();
  }

  setSelectedDate(date: Date): void {
    this.selectedDateSubject.next(date);
  }

  getSelectedDate(): Observable<Date | undefined> {
    return this.selectedDateSubject.asObservable();
  }
}
