import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-my-lib',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Таблица пользователей из библиотеки</h2>

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Имя</th>
          <th>Возраст</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let user of users">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.age }}</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [`
    :host {
      display: block;
      padding: 20px;
      font-family: Arial, sans-serif;
    }

    h2 {
      margin-bottom: 16px;
    }

    table {
      border-collapse: collapse;
      width: 100%;
      max-width: 600px;
    }

    th, td {
      border: 1px solid #cfcfcf;
      padding: 10px 12px;
      text-align: left;
    }

    th {
      background-color: #f2f2f2;
    }
  `]
})
export class MyLibComponent {
  users = [
    { id: 1, name: 'Равшвн', age: 42 },
    { id: 2, name: 'Kitsu', age: 21 },
    { id: 3, name: 'Эмир Джасим бин Хамад ибн Халифа аль-Тани', age: 67 }
  ];
}