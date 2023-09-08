import { BookingService } from './../services/booking.service';
import { ServiceService } from '../services/service.service';
import { Service } from './../models/service.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  services: Service[] = [];
  selectedService: Service | null = null;
  
  constructor(private serviceService: ServiceService, private bookingService: BookingService) {}

  ngOnInit() {
    this.serviceService.getServices().subscribe((data: Service[]) => {
      this.services = data;
    });
  }

  getSelectedService(): Service | null {
    return this.selectedService;
  }

  setSelectedService(service: Service): void {
    this.selectedService = service;
    this.bookingService.setSelectedService(service);
  }
}
