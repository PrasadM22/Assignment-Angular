import { Component, OnInit } from '@angular/core';
import { RESTCallService } from '../services/communication.service';
import { FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'RegisterNewUser',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterUser implements OnInit {

    constructor(private service:RESTCallService ,private router:Router){}
    
    userData = new FormGroup({
        firstName:new FormControl(),
        lastName :new FormControl(),
        userName :new FormControl(),
        password :new FormControl()
    })

    ngOnInit(): void{
     }

     onSubmit(){
         this.service.registerUser(this.userData.value).subscribe((response:any)=>{
             alert(response.messgae)
             this.router.navigate(['/login'])
         })
        // console.log(this.userData.value)
     }
}
