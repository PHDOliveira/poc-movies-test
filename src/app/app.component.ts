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
    console.log("asad");
    console.log(name);
    this.chips.push({ name: name });
  }
}
