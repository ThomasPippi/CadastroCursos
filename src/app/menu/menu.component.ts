import { Component, OnInit } from '@angular/core';
import { CursoService } from '../services/curso.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  cadastrado: boolean = false;
  editado: boolean = false;
  constructor(private cursoService : CursoService){
    
  }
  ngOnInit() : void{
    this.cursoService.cadastrou.subscribe(
      mostrar => this.cadastrado = mostrar
    )
    this.cursoService.editou.subscribe(
      mostrar => this.editado = mostrar
    )
  }
}
