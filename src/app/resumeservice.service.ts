import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ResumeserviceService {
  constructor(private http: HttpClient) {}

  postPerson(data: string) {
    return this.http.post(apiUrl + 'add', data, { 
      observe: 'response',
    });
  }
}
