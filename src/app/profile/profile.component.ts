import { Component } from '@angular/core';
import { AuthService } from '../auth.service'; 
import { User } from '../models'; 

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'] 
})
export class ProfileComponent {
  user: User | null = null;

  constructor(private authService: AuthService) {
    this.user = this.authService.getLoggedInUser(); // Fetch the logged-in user
  }
}