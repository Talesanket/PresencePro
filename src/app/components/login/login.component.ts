import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 username: any='';
 password: any='';

 constructor(private loginService:LoginService, private router:Router){}

 login(){

  const loginRequest:any ={
  username:this.username,
  password:this.password,
  };
  this.loginService.login(loginRequest).subscribe((response) => {
    if(response != null){
      this.router.navigate(['/home'])
    }
    else{
      alert('invalid credential ! ')
      this.router.navigate(['/login'])
    }
  });

 }
}
