import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector:"login",
    templateUrl:"./user-login.component.html",
    styleUrls:["./user-login.component.css"]
})
export class UserLoginComponent implements OnInit{

    email:string;
    password:string;
    user:User;
    constructor(
        private route: Router,
              private  userService:UserService) {}
   


    ngOnInit(){}


     onSubmit() {
         alert(this.email);
         alert(this.password);
        this.userService.getUserByEmail(this.email).subscribe((data) => {
            alert(this.user);
            this.user = data;
            alert("sueremail2");
        });

        if(this.user!=null){
            alert("suerpass");
           if(this.user.userPassword == this.password){
            this.route.navigate(['/main']);
           }
        }else{
            this.route.navigate(['']);
        }

      
    }
    
}