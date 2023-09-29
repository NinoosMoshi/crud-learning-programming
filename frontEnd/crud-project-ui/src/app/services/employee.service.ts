import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseAPI = 'http://localhost:8080/api/employees';

  constructor(private http: HttpClient) { }


  public saveEmployee(employee:Employee):Observable<Employee>{
    return this.http.post<Employee>(`${this.baseAPI}/save`, employee);
  }


  public getAllEmployeeList():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.baseAPI}/all`);
  }


  public deleteEmployee(employeeId:number):Observable<void>{
     return this.http.delete<void>(`${this.baseAPI}/${employeeId}`);
  }




}
