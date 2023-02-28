import { Component } from '@angular/core';
import { ServicesService } from './dataservice/services.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-project';

 constructor(private service: ServicesService){}

 working= this.service.working;
}
