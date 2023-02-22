import { Component } from '@angular/core';
import { ServicesService } from '../dataservice/services.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})
export class Page3Component {

  public user: any;
  public phone: any;
  

  constructor(private services: ServicesService){}

  onSubmit(){
    let user ={
      phone: this.phone
    }
    this.services.deleteDetail(user).subscribe((res)=>{
      console.log('delete', res)
    })
  }
}
