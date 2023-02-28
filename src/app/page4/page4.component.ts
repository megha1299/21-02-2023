import { Component } from '@angular/core';
import { ServicesService } from '../dataservice/services.service';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.scss']
})
export class Page4Component {
  public user: any;
  public email: any;
  public phone: undefined;

  constructor(private services: ServicesService){}

  onSubmit(){
    let user={
      email: this.email,
      phone: this.phone
    }
    this.services.postDetails(user).subscribe((res)=>{
      console.log('post', res);
      
    })
  }
}
