
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost:5000/send_email';  // Ensure this matches your Flask route

  constructor(private http: HttpClient) { }

  sendEmail(message: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, message);  // This sends a POST request
  }
}
