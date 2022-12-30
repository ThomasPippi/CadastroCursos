import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabecarioComponent } from './cabecario/cabecario.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';

const routes: Routes = [
  {path: 'cabecario', component: CabecarioComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'rodape', component: RodapeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
