import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent, PersonDetailComponent, PersonalDetailComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule, BrowserAnimationsModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
