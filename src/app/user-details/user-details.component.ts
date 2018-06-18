import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UsersService } from '../users.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: User
  constructor(
    private usersService: UsersService, 
    private route: ActivatedRoute,
    private router:Router
  ) { }


  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const id = Number(params.get('id'));

        return this.usersService.get(id);
      })
    )
    .subscribe((user: User)=> this.user = user)
  }

  onDeleteClick(){
    this.usersService
      .delete(this.user)
      .subscribe(() => {
        this.router.navigate(['../'], {
          relativeTo: this.route
        })
      })
  }

}
