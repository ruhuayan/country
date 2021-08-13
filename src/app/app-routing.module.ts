import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PathResolveService } from './service/path-resolve.service';

const routes: Routes = [
  { path: '', redirectTo: 'countries', pathMatch: 'full' },
  {
      path: 'countries',
      loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  }, {
      path: 'country/:id',
      loadChildren: () => import('./pages/country/country.module').then(m => m.CountryModule)
  },
  {
    path: '**',
    resolve: {
      path: PathResolveService
    },
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
