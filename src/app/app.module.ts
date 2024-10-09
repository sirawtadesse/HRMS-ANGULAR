import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { InMemoryDataService } from './in-memory-data.service';
import { CandidatesComponent } from './candidates/candidates.component';
import { CompaniesComponent } from './companies/companies.component';
import { EmployeesComponent } from './employees/employees.component';
import { DepartmentsComponent } from './departments/departments.component';
import { SalariesComponent } from './salaries/salaries.component';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { TelegramComponent } from './telegram/telegram.component';


@NgModule({
  declarations: [
    AppComponent,
    CandidatesComponent,
    CompaniesComponent,
    EmployeesComponent,
    DepartmentsComponent,
    SalariesComponent,
    HomeComponent,
    ChatbotComponent,
    LoginComponent,
    ProfileComponent,
    TelegramComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    MatTableModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }