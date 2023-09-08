import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private authService: AuthService) {}

  handleSubmit(signUpForm: NgForm) {
    const formValue = signUpForm.value;

    // validate if passwords match
    const signUpFormData = {
      name: formValue.name,
      email: formValue.email,
      phoneNumber: formValue.phoneNumber,
      password: formValue.password,
    };

    this.authService.signUp(signUpFormData).subscribe();
  }
  
  fillWithDummyData(signUpForm: NgForm) {
    signUpForm.setValue({
      email: '1@1.com',
      password: '1',
      passwordConfirm: '1',
      name: 'John',
      phoneNumber: '+3725554321',
    });
  }

  clearForm(signUpForm: NgForm) {
    signUpForm.reset();
  }
}