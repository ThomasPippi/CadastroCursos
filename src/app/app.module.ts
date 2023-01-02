import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecarioComponent } from './cabecario/cabecario.component';
import { RodapeComponent } from './rodape/rodape.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListarComponent } from './listar/listar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ErrorhandleService } from './services/errorhandle.service';
import { AlertModule } from 'ngx-bootstrap/alert';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';





@NgModule({
  declarations: [
    AppComponent,
    CabecarioComponent,
    RodapeComponent,
    MenuComponent,
    CadastroComponent,
    ListarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    FontAwesomeModule
  ],
  exports: [ModalModule],
  providers: [{provide: ErrorHandler, useClass: ErrorhandleService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
