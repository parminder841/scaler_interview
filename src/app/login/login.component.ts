import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private activatedRoute: ActivatedRoute) { }
    username : string = "";
    password : string = "";
    ngOnInit() {
    }

    login() : void {
      if(this.username == 'admin' && this.password == '12345'){
      // this.router.navigateByUrl('/order');
      this.router.navigate(['/order'])
      }else {
        alert("Invalid credentials");
      }
    }

    signup(){
      alert("sign up")
    }
  }
