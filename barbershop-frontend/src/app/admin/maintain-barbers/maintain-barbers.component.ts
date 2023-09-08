import { BarberService } from './../../services/barber.service';
import { Barber } from './../../models/barber.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-maintain-barbers',
  templateUrl: './maintain-barbers.component.html',
  styleUrls: ['./maintain-barbers.component.css']
})
export class MaintainBarbersComponent {
  barbers: Barber[] = [];

  constructor(private barberService: BarberService) {}

  ngOnInit() {
    this.barberService.getBarbers().subscribe((data: Barber[]) => {
      this.barbers = data;
    });
  }

  deleteBarber(barber: Barber) {
    this.barberService.deleteBarber(barber).subscribe(res => 
      this.barbers = res
    );
  }
}
