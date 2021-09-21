import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() parentData :string = "";

  @Output() str = new EventEmitter();
  sendMsg()
  {
     this.str.emit("Hello From Child");
  }

  constructor() { }

  ngOnInit(): void {
  }







  

  // Angular-Assi-8-Q1
  // textValue : string ="";
  // @Output() myTextbox = new EventEmitter();

  // fun()
  // {
  //   this.myTextbox.emit(this.textValue)
  // }

}
