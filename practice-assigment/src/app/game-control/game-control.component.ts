import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() numberEmitter = new EventEmitter<number>();

  interval:any;

  lastNumber = 0;
  constructor() { }

  ngOnInit(): void {
  }

  startInterval(){
    this.interval = setInterval(()=>{
      this.numberEmitter.emit(this.lastNumber + 1)
      this.lastNumber++;
    },1000)
  }
  stopInterval(){
    clearInterval(this.interval)

  }

}
