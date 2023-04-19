import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { movie, movieDetails, movieResponse } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.scss']
})
export class SingleMovieComponent implements OnInit{
  movies!: Observable<movieDetails>
  base_img='https://image.tmdb.org/t/p/'
  id!:any
  math = Math


  constructor(private route:ActivatedRoute,private movieService:MovieService){
        this.route.params.subscribe(val=>{
      this.id=val['id']
      console.log(this.id);

    this.movies=this.movieService.getMovieDetails(this.id)
    this.movies.subscribe(val=>{
      console.log(val);

    })
    })
  }
  ngOnInit(): void {





  }


  ratingcolor2(rate:number){
    if(rate >= 70 ) return "#204529";
    if(rate >= 50 ) return "#423d0f";
    if(rate <= 49 ) return "#571435";
    return "none"
  }

  ratingcolor(rate:number){
    if(rate >= 70 ) return "#21d07a";
    if(rate >= 50 ) return "#d2d531";
    if(rate <= 49 ) return "#db2360";
    return "none"
  }
}
