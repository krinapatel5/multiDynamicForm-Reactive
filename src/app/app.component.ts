import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'multiDynamicForm-Reactive';

  // constructor(private fb: FormBuilder){}

  // userprofileForm = this.fb.group({
  //   firstName: ['', Validators.required],
  //   lastName: ['', Validators.required],

  //   mobiles: this.fb.array([
  //     this.fb.control('')
  //   ])
  // })

  // get firstName() {
  //   return this.userprofileForm.get('firstName');
  // }
  // get lastName() {
  //   return this.userprofileForm.get('lastName');
  // }

  // onSubmit() {
  //   var firstName = this.userprofileForm.get('firstName');
  //   var lastName = this.userprofileForm.get('lastName');
  // }
  // addNewMobile(){

  // }

  form = this.fb.group({
    lessons: this.fb.array([])
  });

  constructor(private fb:FormBuilder) {}

  get lessons() {
    return this.form.controls["lessons"] as FormArray;
  }

    addLesson() {
      const lessonForm = this.fb.group({
        title: ['', Validators.required],
        level: ['beginner', Validators.required]
      });
    this.lessons.push(lessonForm);
  }

    deleteLesson(lessonIndex: number) {
      this.lessons.removeAt(lessonIndex);
    }
}
