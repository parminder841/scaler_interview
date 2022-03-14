import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CustomMaterialModule } from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { OrderComponent } from './order/order.component';
import { OrderService } from './order.service';
import { HttpClientModule } from '@angular/common/http';
import { CandidateComponent } from './candiadate/candidate.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OrderComponent,
    CandidateComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    FlexLayoutModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [OrderService],
  bootstrap: [AppComponent,OrderService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
