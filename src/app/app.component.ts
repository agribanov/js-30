import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  title = 'World';
  styles = ["yellow", "red", "blue"]
  style = "red"

  constructor(){

  }

  changeTitle(counts: number){
    this.title = '';
  }

  onAddColorClick(){
    this.styles = [...this.styles, 'green']
  }
}
