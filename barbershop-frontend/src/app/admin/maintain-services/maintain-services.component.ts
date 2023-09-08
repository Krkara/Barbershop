import { Service } from './../../models/service.model';
import { ServiceService } from './../../services/service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-maintain-services',
  templateUrl: './maintain-services.component.html',
  styleUrls: ['./maintain-services.component.css']
})
export class MaintainServicesComponent {
  services: Service[] = [];

  constructor(private serviceService: ServiceService) {}

  ngOnInit() { 
    this.serviceService.getServices().subscribe(res => 
      this.services = res
    );
  }
  
  deleteService(service: Service) {
    this.serviceService.deleteService(service).subscribe(res => 
      this.services = res
    );
  }
}
