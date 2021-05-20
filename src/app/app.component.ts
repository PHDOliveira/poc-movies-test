import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'POC - Movies';
  chips: any = [];
  name = "";

  addItem(name: string): void {
    this.chips.push({ name: name });
  }
}
