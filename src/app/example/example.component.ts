import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
  providers: []
})
export class ExampleComponent implements OnInit, OnChanges{
  @Input() text: string
  @Output() onChangeClick = new EventEmitter<number>()
  
  counts: number
  constructor() {
    console.log('component contructor')
  }

  ngOnInit(){
    this.counts = 0;
    console.log('inti')
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('changes', changes)
    return true;
  }

  onBtnClick(){
    this.onChangeClick.emit(++this.counts);
    console.log('clicked')
  }

  ngOnDestroy(){
    console.log('Destory');
  }

}
