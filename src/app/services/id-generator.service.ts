import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdGeneratorService {
  private candidateIdCounter = 1; // Start from 1
  private companyIdCounter = 10; // Start from 1
  private employeeIdCounter = 20; // Start from 1
  private departmentIdCounter = 30; // Start from 1
  private salaryIdCounter = 40; // Start from 1

  generateCandidateId(): number {
    return this.candidateIdCounter++;
  }

  generateCompanyId(): number {
    return this.companyIdCounter++;
  }

  generateEmployeeId(): number {
    return this.employeeIdCounter++;
  }

  generateDepartmentId(): number {
    return this.departmentIdCounter++;
  }

  generateSalaryId(): number {
    return this.salaryIdCounter++;
  }
}