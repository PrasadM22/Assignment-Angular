import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { RESTCallService } from '../services/communication.service';
import { Router } from '@angular/router';

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html',
    styleUrls:['./login.component.css']
})

export class LoginComponent implements OnInit {

    constructor(private service:RESTCallService,private router:Router) { }

    ngOnInit(): void { }

    userData = new FormGroup({
       userName:new FormControl(),
       password:new FormControl()
    })

    onSubmit(){
        this.service.loginUser(this.userData.value).subscribe((responce:any)=>{
            alert(responce.message)
            localStorage.setItem('Token',responce.Login_Token);
            this.userData.reset();
            this.router.navigate(['/Main'])
        })
    }
}