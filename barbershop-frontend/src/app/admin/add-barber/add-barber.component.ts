import { Router } from '@angular/router';
import { Barber } from './../../models/barber.model';
import { NgForm } from '@angular/forms';
import { BarberService } from './../../services/barber.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-barber',
  templateUrl: './add-barber.component.html',
  styleUrls: ['./add-barber.component.css']
})
export class AddBarberComponent {

  constructor(private barberService: BarberService, private router: Router) {}

  handleSubmit(addBarberForm : NgForm) {
    const formValue = addBarberForm.value;

    const newBarber = new Barber(
      formValue.name,
      formValue.email,
      formValue.phoneNumber
    );

    this.barberService.addBarber(newBarber).subscribe(() => {
      this.router.navigate(['/maintain-barbers']);
    });
  }
}
