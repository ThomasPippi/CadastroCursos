import { Component } from '@angular/core';
import { CursoService } from './services/curso.service';
import { Curso } from './models/curso';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CadastroCursos';
  curso = {} as Curso;
  cursos: Curso[] = [];

  constructor(private cursoService: CursoService){}

  ngOnInit(){
    this.getCursos();
  }

  saveCurso(){
    if (this.curso.cursoId !== undefined){
      this.cursoService.updateCurso(this.curso);
    } else {
     this.cursoService.saveCurso(this.curso);  
    }
  }

  getCursos(){
    this.cursoService.getCursos().subscribe((cursos: Curso[]) => {
      this.cursos = cursos;
    });
  }
  deleteCurso(curso: Curso){
    this.cursoService.deleteCurso(curso).subscribe(() => {
      this.getCursos;
    });
  }

  editCurso(curso: Curso){
    this.curso = {...curso};
  }
}
