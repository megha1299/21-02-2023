import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../dataservice/services.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  
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
    this.services.putDetails(user).subscribe((res)=>{
      console.log('put', res)
    })
  }

  
ngOnInit(): void {}
}


