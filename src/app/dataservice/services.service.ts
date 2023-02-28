import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  public working:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  

  constructor(public http: HttpClient) { }

 
  postDetails(user:any){
    return this.http.post('https://jsonplaceholder.typicode.com/posts',user, {reportProgress: true})
    
  }

  putDetails(user:any){
    return this.http.put('https://jsonplaceholder.typicode.com/posts/1', user)
  }

  patchDetails(user: any){
    return this.http.put('https://jsonplaceholder.typicode.com/posts/1', user)
  }
  deleteDetail(user:any){
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/1', user)
  }
}
