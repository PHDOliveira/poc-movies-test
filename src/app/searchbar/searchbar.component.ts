import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MoviesService} from '../movies.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter();

  searches: string[] = [];

  searchbar = {
    label : "Your Search",
    placeholder : "Search for movies"
  };

  constructor(private moviesService:MoviesService) {}

  ngOnInit(): void {}

  searchMovies(): void {
    this.moviesService.param$.next(this.searches.toString());
  }

  addItem(event: any): void {
    const searchInput = event.target.value;

    this.searches.push(searchInput);
    this.submit.emit(searchInput);
  }
}
