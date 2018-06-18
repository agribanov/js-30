import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../models/User';
import { switchMap } from 'rxjs/operators'
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  users$: Observable<User[]>
  
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.updateList()
  }

  ngOnDestroy(){
  }

  updateList(){
    return this.users$ = this.usersService.getList()
  }

  onDeleteUser(user: User){
      this.users$ = this.usersService.delete(user).pipe(
        switchMap(()=> this.updateList())
      )
  }

}
