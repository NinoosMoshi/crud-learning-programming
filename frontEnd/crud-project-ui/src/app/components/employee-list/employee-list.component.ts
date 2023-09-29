import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

  employees: Employee[] = [];

  constructor(private spinner: NgxSpinnerService,
              private employeeService: EmployeeService,
              private toastr: ToastrService){}

  displayedColumns: string[] = ['employeeId', 'employeeName', 'employeeContactNumber', 'employeeAddress', 'employeeGender', 'employeeDepartment', 'employeeSkills', 'delete'];


  ngOnInit(): void {
     this.employeeList();
  }


  employeeList(){
     this.employeeService.getAllEmployeeList().subscribe({
      next:(res:Employee[]) =>{
         this.spinner.show();
         this.employees = res;
         setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
        }, 500);
      },
      error:(err:HttpErrorResponse) =>{

      }
     })
  }



  onDeleteEmployee(employeeId:number){
     this.employeeService.deleteEmployee(employeeId).subscribe({
      next:(res:void) =>{
        this.toastr.error('Delete Employee Successfully', 'Delete...', {timeOut: 3000})
        this.employeeList();
      },
      error:(res:HttpErrorResponse) =>{
        this.toastr.error('Error', 'You can not Delete Employees', {timeOut: 3000})
      }
     })
  }


}
