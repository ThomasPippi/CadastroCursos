import { Component, TemplateRef, ViewChild } from '@angular/core';
import { CursoService } from '../services/curso.service';
import { Curso } from '../models/curso';
import { NgForm } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';



@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})


export class ListarComponent {
  public isCollapsed = true;
  public subCollapsed = true;
  curso = {} as Curso;
  cursos: Curso[] = [];
  modalRef?: BsModalRef;
  @ViewChild('templateConfirm') templateConfirm: any;

  constructor(
    private cursoService: CursoService,
    private modalService: BsModalService){
  }

  getCursos(): void{
    this.cursoService.getCursos().subscribe(cursos => this.cursos = cursos)
  }

  deleteCurso(curso: Curso){
    this.cursoService.deleteCurso(curso).subscribe(() => {this.getCursos()})
  }

  updateCurso(curso: Curso){
    this.cursoService.updateCurso(this.curso).subscribe(curso => this.curso = curso)
  }

  editCurso(curso: Curso){
    this.curso = {...curso};
  }

  cleanForm(form : NgForm){
    this.getCursos();
    form.resetForm();
    this.curso = {} as Curso;
  }
  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template, {
      ariaDescribedby: 'my-modal-description',
      ariaLabelledBy: 'my-modal-title'
    });  
  }
}
