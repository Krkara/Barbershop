import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ServiceService } from './../../services/service.service'; // Import your service service
import { Service } from './../../models/service.model';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent implements OnInit {
  serviceId: number | null = null;
  service: Service | undefined;

  constructor(
    private serviceService: ServiceService, // Inject your service service
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.serviceId = Number(params.get('id'));
      if (this.serviceId) {
        this.serviceService.getService(this.serviceId).subscribe(result => {
          this.service = result;
        });
      }
    });
  }

  handleSubmit(editServiceForm: NgForm) {
    if (!this.service || editServiceForm.invalid) {
      return;
    }

    const formValue = editServiceForm.value;

    const editedService = new Service(
      formValue.name,
      formValue.price,
      formValue.duration,
      this.serviceId !== null ? this.serviceId : undefined
    );

    this.serviceService.editService(editedService).subscribe(() => {
      this.router.navigate(['/maintain-services']);
    });
  }
}
