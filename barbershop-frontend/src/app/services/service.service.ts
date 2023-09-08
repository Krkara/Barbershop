import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { Service } from '../models/service.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private url = environment.baseUrl + '/services';

  constructor(private httpClient: HttpClient) {}

  addService(service: Service) {
    return this.httpClient.post(this.url, service);
  }

  deleteService(service: Service) {
    return this.httpClient.delete<Service[]>(`${this.url}/${service.id}`);
  }

  getServices() {
    return this.httpClient.get<Service[]>(this.url);
  }

  getService(id: number): Observable<Service> {
    return this.httpClient.get<Service>(`${this.url}/${id}`);
  }

  editService(service: Service) {
    return this.httpClient.put<void>(`${this.url}/${service.id}`, service);
  }
}
