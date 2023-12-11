import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent {
  employees = [
    { id: 234, name: 'John', Designation: 'Manager' },
    { id: 456, name: 'Mary', Designation: 'Engineer' },
    { id: 765, name: 'Mark', Designation: 'Manager' },
    { id: 898, name: 'Andrew', Designation: 'HR' },
  ];
}
