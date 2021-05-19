import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import {MoviesService} from '../movies.service'
import { Movie,Response } from './movie';
import { take, takeUntil } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy {
  param: string = "";
  
  destroyed$: Subject<void> = new Subject();

  constructor(private moviesService: MoviesService) {
    
  }
  
  movies: Movie[] = [];
  
  ngOnInit(): void {
   this.param = this.moviesService.param$.value;
   this.moviesService.getMovies(this.param).pipe(takeUntil(this.destroyed$)).subscribe(response => this.movies = response.results);
  }
  
  ngOnDestroy (): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}
