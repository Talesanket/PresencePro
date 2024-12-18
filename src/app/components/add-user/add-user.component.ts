import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  constructor(private userService:UserService){}

  username:any='';
  password:any='';
  firstName:any='';
  lastName:any='';
  email:any='';
  role :any='';

  addUser(){
    const user={
      username:this.username,
      password:this.password,
      firstName:this.firstName,
      lastName:this.lastName,
      email:this.email,
      role:this.role


    }
    this.userService.addUser(user).subscribe((response)=>{
      console.log(response);
      alert('User added Sucessfully')
    })
  }

}
