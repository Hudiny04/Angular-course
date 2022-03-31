import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  DoCheck,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,

} from '@angular/core';
import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit {

  @ViewChild('heading', {static: true}) header: ElementRef;

  @Input('srvElement')  element: {type: string, name:string, content:string};
  constructor() {
    console.log("constructor called")
  }

  ngOnChanges(changes:SimpleChanges): void{
    console.log("ngOnChanges called")
    console.log(changes)
  }

  ngOnInit(): void {
    console.log("ngOnInit called")
  }
  ngDoCheck() {
    console.log("ngDoCheck called")
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit called")
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called")

  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called")
    console.log(this.header.nativeElement.textContent)

  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit called")
  }
}


