import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { DataService } from './data.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { EditGoalComponent } from './edit-goal/edit-goal.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FooterComponent,
    HomeComponent,
    EditGoalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  entryComponents: [EditGoalComponent],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
