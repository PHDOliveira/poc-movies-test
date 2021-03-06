import { Component } from '@angular/core';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'POC - Movies';
  chips: any = [];
  name = "";

  constructor(private moviesService: MoviesService) { }
  addItem(name: string): void {
    this.chips.push({ name: name, id: setNewChipId(this.chips) });
    this.moviesService.list$ = this.chips.map((el: any) => el.name);
    name = "";
  }
  removeItem(id: number): void {
    this.chips = this.chips.filter((el: any) => +el.id !== +id);
    this.moviesService.list$ = this.chips.map((el: any) => el.name);
  }

}

function setNewChipId(chips: []) {
  if (!(chips.length > 0)) return 0;
  return chips.map((chip: any) => chip.id).sort((a, z) => (z - a))[0] + 1;
}