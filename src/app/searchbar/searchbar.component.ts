import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MoviesService} from '../movies.service';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  searchbar = {
    label : "Your Search",
  placeholder : "Search for movies"
  };
  item = "teste";
  @Output() submit: EventEmitter<string> = new EventEmitter();
  
  constructor(private moviesService:MoviesService) { }

  ngOnInit(): void {
  }
  searchMovies(): void{
    console.log('search');
  
  }
  
  addItem(event: any): void {
    console.log(event.target.value);
    this.submit.emit(event.target.value);
    this.moviesService.param$.next(event.target.value);
  }
}
