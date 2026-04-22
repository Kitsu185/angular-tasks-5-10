import { Component } from '@angular/core';
import { MyLibComponent } from 'my-lib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MyLibComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}