import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { CandidatesComponent } from './candidates/candidates.component'; 
import { CompaniesComponent } from './companies/companies.component'; 
import { EmployeesComponent } from './employees/employees.component'; 
import { DepartmentsComponent } from './departments/departments.component'; 
import { SalariesComponent } from './salaries/salaries.component'; 
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component'; 
import { AuthGuard } from './guards/auth.guard'; 



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent }, // Default route
  { path: 'login', component: LoginComponent },
  { path: 'candidates', component: CandidatesComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'salaries', component: SalariesComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/home' } // Redirect to home for any unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }