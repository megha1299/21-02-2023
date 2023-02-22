import { Component } from '@angular/core';
import { ServicesService } from '../dataservice/services.service';


@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component {

  public user: any;
  public email: any;
  public phone: any;
  
  constructor(private services: ServicesService){}

  onSubmit(){
    let user ={
      email: this.email,
      phone: this.phone
    }
    this.services.patchDetails(user).subscribe((res)=>{
      console.log('patch', res)
    })
  }
}
