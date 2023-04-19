import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { hero, movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-hero-img',
  templateUrl: './hero-img.component.html',
  styleUrls: ['./hero-img.component.scss']
})
export class HeroIMgComponent {
  movies!: Observable<movie[]>;

  base_img='https://image.tmdb.org/t/p/'
  constructor(private moviesService:MovieService){}
  ngOnInit(): void {
    this.movies=this.moviesService.getTime('movie','day',)

  }
  customOptions: OwlOptions = {
    loop: true,
    navSpeed: 400,
    autoplay:true,
    dots:false,
    navText:['',''],

    nav:false,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
  }


}
