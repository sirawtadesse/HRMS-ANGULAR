export interface Candidate {
    id: number;
    name: string;
    appliedPosition: string;
    email: string;
    phone: string;
    status: 'applied' | 'interviewed' | 'hired' | 'rejected';
    companyId: number; // Relationship with Company
}

export interface Company {
    id: number;
    name: string;
    location: string;
    employees: Employee[]; // Relationship with Employee
    candidates: Candidate[]; // Relationship with Candidates
}

export interface Employee {
    id: number;
    name: string;
    departmentId: number;
    companyId: number; // Relationship with Company
    salaryId: number; // Relationship with Salary
}

export interface Department {
    id: number;
    name: string;
}

export interface Salary {
    id: number;
    employeeId: number;
    amount: number;
    currency: string; 
}

export interface User {
    id: number;
    username: string;
    password: string; 
    
}

