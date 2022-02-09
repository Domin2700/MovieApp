import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'browse',
    loadChildren: () => import('./movies/movies.module').then(mod => mod.MoviesModule)
  },
  {
    path: '**',
    redirectTo: 'browse',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
