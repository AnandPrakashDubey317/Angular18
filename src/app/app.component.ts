import { Component } from '@angular/core';
import { TempelateFormComponent } from './components/tempelate-form/tempelate-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';

@Component({
  selector: 'app-root',
  imports: [TempelateFormComponent, ReactiveFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular_18';
}
