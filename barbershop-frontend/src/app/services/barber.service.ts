import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { Barber } from '../models/barber.model';

@Injectable({
  providedIn: 'root'
})
export class BarberService {
  private url = environment.baseUrl + '/barbers';

  constructor(private httpClient: HttpClient) {}

  addBarber(barber: Barber) {
    return this.httpClient.post(this.url, barber);
  }

  deleteBarber(barber: Barber) {
    return this.httpClient.delete<Barber[]>(`${this.url}/${barber.id}`);
  }

  getBarbers() {
    return this.httpClient.get<Barber[]>(this.url);
  }

  getBarber(id: number): Observable<Barber> {
    const options = this.getAuthToken();

    return this.httpClient.get<Barber>(`${this.url}/${id}`, options);
  }

  editBarber(barber: Barber) {
    const options = this.getAuthToken();

    return this.httpClient.put<void>(`${this.url}/${barber.id}`, barber, options);
  }

  private getAuthToken() {
    return {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + sessionStorage.getItem("token")
      })
    };
  }
}
