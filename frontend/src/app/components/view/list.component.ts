import { Component, OnInit ,Inject} from '@angular/core';
import { RESTCallService } from 'src/app/services/communication.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-list',
    templateUrl: './list.component.html'
})

export class ListComponent implements OnInit {
    dataSource:any=[];
    constructor(private service:RESTCallService,private router:Router) { }

    ngOnInit(): void { 
        this.getData()
    }

    getData(){
        this.service.readAll().subscribe((responce:any)=>{
            this.dataSource = responce.data
            // console.log(this.dataSource)
        })
    }

    onClickDelete(userId:any){
        this.service.deleteData(userId).subscribe((response:any)=>{
            this.getData();
            alert(response.message)
        })
    }

    onClickEdit(userData:any){
         // console.log(userData._id);
        //   localStorage.setItem('ID',userData._id);
         //this.router.navigate(['/update'])
    }
    onClickBack(){
        this.router.navigate(['/Main'])
    }
}
