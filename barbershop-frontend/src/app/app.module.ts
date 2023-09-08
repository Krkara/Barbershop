import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BarberComponent } from './barber/barber.component';
import { ServiceComponent } from './service/service.component';
import { AddBarberComponent } from './admin/add-barber/add-barber.component';
import { EditBarberComponent } from './admin/edit-barber/edit-barber.component';
import { MaintainBarbersComponent } from './admin/maintain-barbers/maintain-barbers.component';
import { AddServiceComponent } from './admin/add-service/add-service.component';
import { EditServiceComponent } from './admin/edit-service/edit-service.component';
import { MaintainServicesComponent } from './admin/maintain-services/maintain-services.component';
import { EditBookingComponent } from './admin/edit-booking/edit-booking.component';
import { MaintainBookingsComponent } from './admin/maintain-bookings/maintain-bookings.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BookingComponent } from './booking/booking.component';
import { AvailabilityComponent } from './availability/availability.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BarberComponent,
    ServiceComponent,
    AddBarberComponent,
    EditBarberComponent,
    MaintainBarbersComponent,
    AddServiceComponent,
    EditServiceComponent,
    MaintainServicesComponent,
    EditBookingComponent,
    MaintainBookingsComponent,
    HomepageComponent,
    LoginComponent,
    SignupComponent,
    BookingComponent,
    AvailabilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
