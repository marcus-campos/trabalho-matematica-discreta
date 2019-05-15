import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'propositions', loadChildren: './propositions/propositions.module#PropositionsPageModule' },
  { path: 'true-table', loadChildren: './true-table/true-table.module#TrueTablePageModule' },
  { path: 'de-morgan', loadChildren: './de-morgan/de-morgan.module#DeMorganPageModule' },
  { path: 'tautologie', loadChildren: './tautologie/tautologie.module#TautologiePageModule' },
  { path: 'argument', loadChildren: './argument/argument.module#ArgumentPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
