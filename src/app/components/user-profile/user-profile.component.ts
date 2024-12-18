import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Location } from '@angular/common'; // Ensure Location is imported

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  username: string = ''; // Stores the username from the route
  userProfile: any; // Stores the user profile data

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location // Inject Location for the back button
  ) {}

  ngOnInit(): void {
    // Fetch the username parameter from the route
    this.username = this.route.snapshot.paramMap.get('username') || '';
    console.log('Username:', this.username);

    // Fetch the user profile data
    this.getUserProfile(this.username);
  }

  getUserProfile(username: string): void {
    this.userService.getUserProfile(username).subscribe(
      (response) => {
        this.userProfile = response; // Assign API response to userProfile
        console.log('User Profile:', this.userProfile);
      },
      (error) => {
        console.error('Failed to fetch user profile:', error);
        alert('Unable to fetch user profile. Please try again later.');
      }
    );
  }

  goBack(): void {
    this.location.back(); // Navigate to the previous page
  }
}
