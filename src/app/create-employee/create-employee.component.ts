import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee:Employee=new Employee();
  constructor(private employeeService:EmployeeService, private router:Router) { }

  ngOnInit(): void {
  }

  goToEmployees(){
    this.router.navigate(['/employees']);
  }

  createEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(
      data=>console.log(this.employee),
      errors=>console.log(errors));

  }

  onSubmit(){
    this.createEmployee();
    this.goToEmployees();
  }
}
