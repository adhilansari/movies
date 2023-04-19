import { HttpClient } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { Observable, map } from 'rxjs';
import { movieResponse, movie, movieDetails } from '../models/movie';
import { Users } from '../models/users';


@Injectable({
  providedIn: 'root',
})
export class MovieService {
  base_url = 'https://api.themoviedb.org/3';
  api_key = '54e48d6b4c6ebb0205940b22a99a1c1d';
  sidebarOpen:boolean=true

  constructor(private http: HttpClient) { }

  getTime(category:'tv'|'movie',time: 'day' | 'week'): Observable<movie[]> {
    return this.http
      .get<movieResponse>(`${this.base_url}/trending/${category}/${time}`, {
        params: {
          api_key: this.api_key,
        }
      })
      .pipe(
        map((res) => res.results )
      );
  }
  getCategory(category:'tv'|'movie'):Observable<movie[]> {
    return this.http.get<movieResponse>(`${this.base_url}/${category}/popular`, {
      params: {
        api_key: this.api_key
      }
    }).pipe(map(res => res.results))
  }

  getSearchMovies(searchKey:string ){
    return this.http.get<movieResponse>(`${this.base_url}/search/movie`, {
      params: {
        api_key: this.api_key,
        query:searchKey
      }
    }).pipe(map(res => res.results))

  }

  getMovieDetails(movie_id:number){
    return this.http.get<movieDetails>(`${this.base_url}/movie/${movie_id}`, {
      params: {
        api_key:this.api_key,
      }
    })
  }

  getSimilarMovies(movie_id:number){
    return this.http.get<movieResponse>(`${this.base_url}/movie/${movie_id}/similar`, {
      params: {
        api_key:this.api_key,
      }
    }).pipe(map(res=>res.results))
  }

  getReviews(movie_id:number){
    return this.http.get<movieResponse>(`${this.base_url}/movie/${movie_id}/reviews`, {
      params: {
        api_key:this.api_key,
      }
    }).pipe(map(res=>res.results))
  }
  users(){
    return this.http.get<Users>('https://dummyjson.com/users').pipe(map(res=>res.users))
  }
  user(){
    return this.http.get('https://dummyjson.com/users/1').pipe(map(res=>res))
  }
}
