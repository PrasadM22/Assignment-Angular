import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { RESTCallService } from 'src/app/services/communication.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-name',
    templateUrl: './create.component.html',
    styleUrls:['./create.component.css']
})
export class CreateComponent implements OnInit {
    constructor(private service:RESTCallService,private router:Router) { }

    ngOnInit(): void { }

    DeptData = new FormGroup({
        DeptNo: new FormControl(),
        DeptName: new FormControl(),
        DeptId: new FormControl(),
        DeptCategory: new FormControl()
    })

    onSubmit(){
        this.service.createData(this.DeptData.value).subscribe((response:any)=>{
            alert(response.message)
            this.DeptData.reset();
        })
    }
    onClickBack(){
        this.router.navigate(['/Main'])
    }
}
