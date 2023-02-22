import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../dataservice/services.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public user: any;
  public firstname: any;
  public lastname: any;
  public address: any;
  public email: any;
  public phone: any;
  public dob: any;
  constructor(private services: ServicesService){}


  onSubmit(){
    let user ={
      firstname: this.firstname,
      lastname: this.lastname,
      address: this.address,
      email: this.email,
      dob: this.dob,
      phone: this.phone
    }
    this.services.postDetails(user).subscribe((res)=>{
      console.log('post', res)
    })
  }

  
  ngOnInit(): void {
   
  }
}
