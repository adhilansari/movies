import { Component } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, switchMap } from 'rxjs';
import { movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent {
  base_img = 'https://image.tmdb.org/t/p/'

  Switch1!: boolean
  Switch2!: boolean
  Switch3!: boolean

  $time = new BehaviorSubject<'day' | 'week'>('day');
  $show = new BehaviorSubject<'popular' | 'trending'>('popular');
  $category = new BehaviorSubject<'tv' | 'movie'>('tv');

  Tmovies!: Observable<movie[]>

  constructor(private movieService: MovieService) {
    this.Tmovies = combineLatest([
      this.$time,
      this.$category,
      this.$show
    ]).pipe(
      switchMap(([time, category, show]) => {
        if (show == 'popular') {
          return this.movieService.getTime(category, time)
        } else {
          return this.movieService.getCategory(category)
        }
      })
    )
  }

  changeShow(current: 'trending' | 'popular') {
    this.Switch1 = !this.Switch1
    this.$show.next(current == 'popular' ? 'trending' : 'popular')
  }

  changeCategory(current: 'movie' | 'tv') {
    this.Switch2 = !this.Switch2
    this.$category.next(current == 'tv' ? 'movie' : 'tv')
  }

  changeTime(current: 'day' | 'week') {
    this.Switch3 = !this.Switch3
    this.$time.next(current == 'week' ? 'day' : 'week')
  }


}
