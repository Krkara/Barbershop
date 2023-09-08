import { Router } from '@angular/router';
import { Service } from './../../models/service.model';
import { NgForm } from '@angular/forms';
import { ServiceService } from './../../services/service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent {
  constructor(private serviceService: ServiceService, private router: Router) {}

  handleSubmit(addServiceForm : NgForm) {
    const formValue = addServiceForm.value;

    const newService = new Service(
      formValue.name,
      formValue.price,
      formValue.duration
    );

    this.serviceService.addService(newService).subscribe(() => {
      this.router.navigate(['/maintain-services']);
    });
  }
}
