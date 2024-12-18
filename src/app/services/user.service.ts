import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  addUser(user:any):Observable<any> {
    const url='http://localhost:8091/user/register-user'
    return this.http.post(url,user);
  }

  allUser():Observable<any> {
    const url='http://localhost:8091/user/get-all-user'
    return this.http.get(url);
  }

  deleteUser(username: any): Observable<string> {
    const url = `http://localhost:8091/user/delete-user-by-username?username=${username}`;
    return this.http.delete(url, { responseType: 'text' });
  }
  getUserProfile(username: any): Observable<any> {
    const url = `http://localhost:8091/user/get-user-by-username/${username}`;
    return this.http.get<any>(url); // Use `get` and ensure the type matches the backend response.
  }

}
