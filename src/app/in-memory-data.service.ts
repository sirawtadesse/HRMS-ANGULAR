import { Injectable } from '@angular/core';
import { Candidate, Company, Employee, Department, Salary, User } from './models';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const candidates: Candidate[] = [
      { id: 1, name: 'Siraw Tadesse', appliedPosition: 'SW Developer', email: 'srw@gmail.com', phone: '091-965-4321', status: 'applied', companyId: 10 },
      { id: 2, name: 'Gechi', appliedPosition: 'UI Designer', email: 'gechi@gmail.com', phone: '098-765-4321', status: 'interviewed', companyId: 11 }
    ];
    
    const companies: Company[] = [
      {
        id: 10, name: 'Tech Solution', location: 'Addis Ababa',
        employees: [],
        candidates: []
      },
      {
        id: 11, name: 'S Promotion', location: 'Semit',
        employees: [],
        candidates: []
      }
    ];

    const employees: Employee[] = [
      { id: 20, name: 'Dawit', departmentId: 30, companyId: 10, salaryId: 40 },
      { id: 21, name: 'Girma', departmentId: 31, companyId: 11, salaryId: 41 }
    ];

    const departments: Department[] = [
      { id: 30, name: 'HR' },
      { id: 31, name: 'IT' }
    ];

    const salaries: Salary[] = [
      { id: 40, employeeId: 20, amount: 60000, currency: 'USD' },
      { id: 41, employeeId: 21, amount: 50000, currency: 'USD' }
    ];

    const users: User[] = [
      { id: 1, username: 'admin', password: 'admin' } // Example user
    ];
    

    return { candidates, companies, employees, departments, salaries, users  };
  }
}

