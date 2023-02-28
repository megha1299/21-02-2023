import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { ServicesService } from './dataservice/services.service';
import { TestInterceptor } from './interceptor/test.interceptor';
import { ToastrService } from 'ngx-toastr';
import { MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageComponent,
    Page2Component,
    Page3Component,
    Page4Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatProgressBarModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: TestInterceptor, multi: true
    },
    ServicesService,
    ToastrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
