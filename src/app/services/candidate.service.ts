import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidate } from '../models';
import { IdGeneratorService } from './id-generator.service'; 

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private apiUrl = 'api/candidates'; 

  constructor(private http: HttpClient, private idGenerator: IdGeneratorService) {}

  getCandidates(): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(this.apiUrl);
  }

  addCandidate(candidate: Candidate): Observable<Candidate> {
    const newCandidate = { ...candidate, id: this.idGenerator.generateCandidateId() }; // Assign unique ID
    return this.http.post<Candidate>(this.apiUrl, newCandidate);
  }

  updateCandidate(updatedCandidate: Candidate): Observable<Candidate> {
    return this.http.put<Candidate>(`${this.apiUrl}/${updatedCandidate.id}`, updatedCandidate);
  }

  deleteCandidate(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}