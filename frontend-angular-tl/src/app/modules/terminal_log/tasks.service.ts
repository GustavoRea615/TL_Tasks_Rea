import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(
    private _http: HttpClient,
  ) { }

  private apiUrl = 'http://localhost:3000/api/v1';
  // private apiUrl = 'https://j29d1ghs-3000.usw3.devtunnels.ms/api/v1';

  getAllTasks(): Observable<any> {
    return this._http.get(`${this.apiUrl}/tasks`);
  }
  
  createTask(data: any): Observable<any> {
    return this._http.post(`${this.apiUrl}/tasks`, data);
  }

  updateTask(id: any, data: any): Observable<any> {
    return this._http.put(`${this.apiUrl}/tasks/`+id, data);
  }

  deleteTask(id: any): Observable<any> {
    return this._http.delete(`${this.apiUrl}/tasks/`+id);
  }
}
