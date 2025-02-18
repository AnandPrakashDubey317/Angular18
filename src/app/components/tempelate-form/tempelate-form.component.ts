import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tempelate-form',
  imports: [CommonModule, FormsModule, JsonPipe],
  templateUrl: './tempelate-form.component.html',
  styleUrl: './tempelate-form.component.css',
})
export class TempelateFormComponent {
  studentObj: any = {
    firstName: '',
    lastName: '',
    userName: '',
    city: '',
    state: '',
    zipCode: '',
    isAcceptTerms: false,
  };

  formValue: any;

  onSubmit() {
    this.formValue = this.studentObj;
  }

  onReset() {
    this.studentObj = {
      firstName: '',
      lastName: '',
      userName: '',
      city: '',
      state: '',
      zipCode: '',
      isAcceptTerms: false,
    };
  }
}
