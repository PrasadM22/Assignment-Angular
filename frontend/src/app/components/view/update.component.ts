import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-update',
    templateUrl: './update.component.html',
    styleUrls:['update.component.css']
})

export class UpdateComponent implements OnInit {
    newData:any;

    constructor(private router:Router){ }

    loadData(){
     
    }

    ngOnInit(): any {
     }
    userData = new FormGroup({
        DeptNo: new FormControl(),
        DeptName: new FormControl(),
        DeptId: new FormControl(),
        DeptCategory: new FormControl()
    })

    
    onSubmit(): void{
        console.log(this.newData)
       // this.router.navigate(['/list'])
    }
}

