import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddNumber: number[] = []
  evenNumber: number[] = []

  numberEmitterFired(numberData:number){
    console.log(numberData)
    if(numberData%2==0){
      this.evenNumber.push(numberData)
    }else{
      this.oddNumber.push(numberData)
    }
    console.log(this.oddNumber)
  }

}
