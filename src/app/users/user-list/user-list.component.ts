import { Component, Input } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  @Input({transform: (value: User[] | null) => !value ? []: value}) users!: User[]
}
