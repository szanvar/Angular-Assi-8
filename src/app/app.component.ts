import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Assi8';

  userName : string = "";
  msg(value :any)
  {
   return this.userName = value
  }

  msg1 :string = "";
  msg2 :string = "Hello form Parent";  

  name: string = "";
  
   
  // public msg1 : string = "Hello form Parent";
}
