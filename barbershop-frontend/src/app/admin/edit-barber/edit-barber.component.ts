import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BarberService } from './../../services/barber.service';
import { Barber } from './../../models/barber.model';

@Component({
  selector: 'app-edit-barber',
  templateUrl: './edit-barber.component.html',
  styleUrls: ['./edit-barber.component.css']
})
export class EditBarberComponent implements OnInit {
  barberId: number | null = null;
  barber: Barber | undefined;

  constructor(
    private barberService: BarberService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.barberId = Number(params.get('id'));
      if (this.barberId) {
        this.barberService.getBarber(this.barberId).subscribe(result => {
          this.barber = result;
        });
      }
    });
  }

  handleSubmit(editBarberForm: NgForm) {
    if (!this.barber || editBarberForm.invalid) {
      return;
    }

    const formValue = editBarberForm.value;

    const editedBarber = new Barber(
      formValue.name,
      formValue.email,
      formValue.phoneNumber,
      this.barberId !== null ? this.barberId : undefined
      );

    this.barberService.editBarber(editedBarber).subscribe(() => {
      this.router.navigate(['/maintain-barbers']);
    });
  }
}
