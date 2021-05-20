import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MoviesService } from '../movies.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter();

  searches: string[] = [];

  searchbar = {
    label: "Your Search",
    placeholder: "Search for movies"
  };

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void { }

  searchMovies(): void {
    const arrayParams = this.moviesService.list$;
    this.moviesService.param$.next(arrayParams);
  }

  addItem(event: any): void {
    const searchInput = event.target.value;

    this.submit.emit(searchInput);
    event.target.value = "";
  }
}
