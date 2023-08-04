import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  title = 'Nested Form Array Example';
  empForm: FormGroup;

  constructor(private _fb: FormBuilder){
    this.empForm = _fb.group({
      employees: this._fb.array([])
    });
  }

  employees(): FormArray{
    return this.empForm.get('employees') as FormArray;
  }

  newEmployee(): FormGroup{
    return this._fb.group({
      firstName: '',
      lastName: '',
      skills: this._fb.array([])
    });
  }

  addEmployee(){
    console.log(`Adding an employee`);
    this.employees().push(this.newEmployee());
  }

  removeEmployee(empIndex: number){
    this.employees().removeAt(empIndex);
  }

  employeeSkills(empIndex: number): FormArray{
    return this.employees().at(empIndex).get('skills') as FormArray;
  }

  newSkill(): FormGroup{
    return this._fb.group({
      skill: '',
      exp: '',
    });
  }

  addEmployeeSkill(empIndex: number){
    this.employeeSkills(empIndex).push(this.newSkill());
  }

  removeEmployeeSkill(empIndex: number, skillIndex: number){
    this.employeeSkills(empIndex).removeAt(skillIndex);
  }

  onSubmit(){
    console.log(this.empForm.value);
  }
}
