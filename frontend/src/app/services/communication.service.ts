import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class RESTCallService {
    constructor(private http:HttpClient){}

    registerUser(Data:any){
        const url ='http://localhost:2345/register'
        return this.http.post(url,Data)
    }

    loginUser(Data:any){
        const url ='http://localhost:2345/login'
        return this.http.post(url,Data);
    }

    createData(userData:any){
        const url = 'http://localhost:2345/create'
          return this.http.post(url,userData);
     }

    readData(userId:any){
        const url =`http://localhost:2345/readData/${userId}`
        return this.http.get(url);
    }

    updateData(userId:any,userData:any){
         const url = `http://localhost:2345/update/${userId}`
         return this.http.put(url,userData);
     }

    deleteData(userId:any){
        const url = `http://localhost:2345/delete/${userId}`
        return this.http.delete(url)
     }

    readAll(){
         const url = 'http://localhost:2345/readAllData'
         return this.http.get(url)
    }
}