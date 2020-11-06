import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/common/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(){
    this.listEmployee();
  }
  listEmployee() {
    this.employeeService.getEmployeeList().subscribe(
      data => {
        this.employees = data;
      }
    )
  }

}
