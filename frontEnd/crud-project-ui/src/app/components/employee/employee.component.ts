import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{

  employee: Employee = new Employee;
  skills: string[] = [];

  constructor(private employeeService:EmployeeService, private router: Router){}

  ngOnInit(): void {

  }

  saveEmployee(employeeForm:NgForm): void{
     this.employeeService.saveEmployee(this.employee).subscribe({
       next:(res:Employee) =>{
         console.log(res)
         employeeForm.reset();
         this.employee.employeeGender = '';
         this.skills = [];
         this.employee.employeeSkills = '';
         this.router.navigateByUrl("/employee-list")

       },
       error:(err:HttpErrorResponse) =>{
         console.log(err)
       }
     })
  }

  checkSkills(skill:string){
     return this.employee.employeeSkills != null && this.employee.employeeSkills.includes(skill);
  }

  checkGender(gender:string){
    return this.employee.employeeGender != null && this.employee.employeeGender == gender;
  }


  selectGender(gender:string): void{
    this.employee.employeeGender = gender;
  }


  onSkillsChange(event:any): void{
    if(event.checked){
       this.skills.push(event.source.value);
    }else{
       this.skills.forEach(
        (item, index)=>{
          if(item == event.source.value) this.skills.splice(index,1);
        }
       )
    }

    this.employee.employeeSkills = this.skills.toString();
  }





}
