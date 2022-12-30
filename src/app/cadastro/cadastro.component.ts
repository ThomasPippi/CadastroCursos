import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CursoService } from '../services/curso.service';
import { Curso } from '../models/curso';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-cadastro', 
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
    public isCollapsed = true;
    
    curso = {} as Curso;
    cursos: Curso[] = [];
    
    constructor(private cursoService: CursoService){
      
    }

    getCursos(): void{
      this.cursoService.getCursos().subscribe(cursos => this.cursos = cursos);
    }

    saveCurso(curso: Curso){
      this.cursoService.saveCurso(this.curso).subscribe(curso =>{
        if(curso.cursoId != null ){
          this.cursoService.cadastroSucesso();
        }
      }); 
    }

    cleanForm(form : NgForm){
      this.getCursos();
      form.resetForm();
      this.curso = {} as Curso;
    }

}

