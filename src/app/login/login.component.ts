import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // Properties bound to form inputs
username: string = '';
password: string = '';

constructor(private router: Router) {}

  onSignIn() {
    // Perform actions on sign in
    console.log(`User ${this.username} is trying to sign in with password ${this.password}`);
  }

  onCancel(): void {
    this.username = '';
    this.password = '';
  }

  onSubmit() {
    console.log('Form Submitted', this.username, this.password);
    // You would typically handle the authentication logic here
  }

}
