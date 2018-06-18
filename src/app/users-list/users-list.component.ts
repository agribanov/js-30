import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  @Input() users: User[]
  @Output() deleteUser = new EventEmitter<User>()
  constructor() { }

  ngOnInit() {
  }

  onDeleteBtnClick(user: User){
    this.deleteUser.emit(user)
  }

}
