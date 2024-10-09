import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password).subscribe(user => {
      if (user) {
        alert(`Welcome back, ${user.username}!`); // Notification on successful login
        this.router.navigate(['/home']);
      } else {
        this.errorMessage = 'Invalid credentials';
      }
    });
  }
}