import { AvailabilityComponent } from './availability/availability.component';
import { AddServiceComponent } from './admin/add-service/add-service.component';
import { AddBarberComponent } from './admin/add-barber/add-barber.component';
import { EditServiceComponent } from './admin/edit-service/edit-service.component';
import { EditBarberComponent } from './admin/edit-barber/edit-barber.component';
import { EditBookingComponent } from './admin/edit-booking/edit-booking.component';
import { MaintainServicesComponent } from './admin/maintain-services/maintain-services.component';
import { MaintainBarbersComponent } from './admin/maintain-barbers/maintain-barbers.component';
import { MaintainBookingsComponent } from './admin/maintain-bookings/maintain-bookings.component';
import { ServiceComponent } from './service/service.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarberComponent } from './barber/barber.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'barbers', component: BarberComponent },
  { path: 'services', component: ServiceComponent },
  { path: 'maintain-bookings', component: MaintainBookingsComponent },
  { path: 'maintain-barbers', component: MaintainBarbersComponent },
  { path: 'maintain-services', component: MaintainServicesComponent },
  { path: 'edit-booking/:id', component: EditBookingComponent },
  { path: 'edit-barber/:id', component: EditBarberComponent },
  { path: 'edit-service/:id', component: EditServiceComponent },
  //{ path: 'add-barber', component: AddBarberComponent },
  { path: 'add-service', component: AddServiceComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add-barber', component: SignupComponent },
  { path: 'availability', component: AvailabilityComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
