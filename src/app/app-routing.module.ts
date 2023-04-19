import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './layouts/search/search.component';
import { SingleMovieComponent } from './layouts/single-movie/single-movie.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'home', component:HomeComponent },
  {path:'results/:search', component:SearchComponent},
  {path:'movie/:id/:type' , component:SingleMovieComponent},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
