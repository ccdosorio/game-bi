import { Component } from '@angular/core';

type Data = {
  [key: string]: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  data: Data = { Germany: 'Berlin', España: 'Madrid', Italia: 'Milan' };
}
