import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowseComponent } from './componenents/browse/browse.component';
import { MoviesComponent } from './componenents/movies/movies.component';
import { AboutComponent } from './componenents/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: BrowseComponent,
    children: 
    [
      {
        path: '',
        component: MoviesComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }

    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
