import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Ensures the service is provided globally
})
export class SubjectService {
  private baseUrl = 'http://localhost:8091/subject';

  constructor(private http: HttpClient) {}

  getAllSubjects(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/get-all-subjects`);
  }

  addSubject(subject: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add-subject`, subject);
  }
}
