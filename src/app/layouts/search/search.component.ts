import { Component, OnInit,   } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{
  SMovies!:Observable<movie[]>
  constructor(private movies:MovieService , private route:ActivatedRoute){

  }
  ngOnInit(): void {
this.route.params.subscribe(val=>{
  this.SMovies = this.movies.getSearchMovies(val['search'])
})

  }


}
