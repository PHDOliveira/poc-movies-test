import { Component, OnDestroy, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service'
import { Movie } from './movie';
import { take, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy {
  param: string = "";

  destroyed$: Subject<void> = new Subject();
  hasMovies: boolean = false;
  movies: Movie[] = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.param$.pipe(takeUntil(this.destroyed$)).subscribe(param => {
      this.movies = [];
      if (param.length) {
        param.map((el: any) => {
          this.moviesService.getMovies(el).pipe(take(1)).subscribe(response => {
            this.movies = this.movies.concat(response.results);
            this.hasMovies = true;

          });
        })
      }
      if (this.movies.length > 0) {
        this.hasMovies = true;
      } else {
        this.hasMovies = false;
      }
    })
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}
