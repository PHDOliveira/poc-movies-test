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
  removeItem(id: number): void {
    this.chips = this.chips.filter((el: any) => +el.id !== +id);
    this.moviesService.list$ = this.chips.map((el: any) => el.name);
}
