import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import Notiflix from 'notiflix';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, NgxMaskDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  phone = '';
  card = '';

  showSuccess(): void {
    Notiflix.Notify.success('Успешное уведомление из Notiflix');
  }

  showFailure(): void {
    Notiflix.Notify.failure('Ошибка из Notiflix');
  }

  showInfo(): void {
    Notiflix.Notify.info('Информационное сообщение из Notiflix');
  }

  showWarning(): void {
    Notiflix.Notify.warning('Предупреждение из Notiflix');
  }
}