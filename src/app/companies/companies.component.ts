import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { EmployeeService } from '../services/employee.service';
import { CandidateService } from '../services/candidate.service';
import { Company, Employee, Candidate } from '../models';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies: Company[] = [];
  employees: Employee[] = [];
  candidates: Candidate[] = []; // Store candidates
  
  newCompany: Omit<Company, 'id'> = {
    name: '',
    location: '',
    employees: [],
    candidates: []
  };
  
  editCompanyId: number | null = null;

  constructor(
    private companyService: CompanyService,
    private employeeService: EmployeeService,
    private candidateService: CandidateService
  ) {}

  ngOnInit(): void {
    this.loadCompanies();
    this.loadEmployees();
    this.loadCandidates();
  }

  loadCompanies(): void {
    this.companyService.getCompanies().subscribe(companies => {
      this.companies = companies;
    });
  }

  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe(employees => {
      this.employees = employees; // Subscribe to get employee data
    });
  }

  loadCandidates(): void {
    this.candidateService.getCandidates().subscribe(candidates => {
      this.candidates = candidates; // Subscribe to the observable to get candidate data
    });
  }

  addCompany(): void {
    const companyToAdd: Company = {
      id: 0, // ID will be generated by the server
      ...this.newCompany
    };
    this.companyService.addCompany(companyToAdd).subscribe(() => {
      this.loadCompanies();
      this.resetForm();
    });
  }

  editCompany(company: Company): void {
    this.newCompany = { ...company };
    this.editCompanyId = company.id;
  }

  updateCompany(): void {
    if (this.editCompanyId) {
      const updatedCompany: Company = {
        id: this.editCompanyId,
        ...this.newCompany
      };
      this.companyService.updateCompany(updatedCompany).subscribe(() => {
        this.loadCompanies();
        this.resetForm();
      });
    }
  }

  deleteCompany(id: number): void {
    this.companyService.deleteCompany(id).subscribe(() => {
      this.loadCompanies();
    });
  }

  resetForm(): void {
    this.newCompany = {
      name: '',
      location: '',
      employees: [],
      candidates: []
    };
    this.editCompanyId = null;
  }
}