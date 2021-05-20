import { Injectable } from '@angular/core';
import { Response } from './movie/movie';
import { MOVIES } from './mock-movies';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  results$: Response = { results: [] };
  param$ = new BehaviorSubject<any>("");
  list$ = new BehaviorSubject<Array<any>>([]);

  getMovies(param: []): Observable<Response> {
    const moviesUrl = 'https://api.themoviedb.org/3/search/movie?&api_key=feb6f0eeaa0a72662967d77079850353&query=' + param;
    return this.http.get<Response>(moviesUrl);

  }
  constructor(
    private http: HttpClient,
  ) { }
}
