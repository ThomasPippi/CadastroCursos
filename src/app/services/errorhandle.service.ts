import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { CursoService } from './curso.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorhandleService implements ErrorHandler {

  constructor(private cursoService : CursoService) { }

  handleError(error: HttpErrorResponse | any): void {
    if(error instanceof HttpErrorResponse){
      console.log(error.status);

      switch(error.status){
        case 0:
          alert('Não foi possível conectar ao servidor...')
          break;
        case 400:
          alert('Não foi possível realizar a operação.')
          break;
        case 201:
          alert('Deu')
          break;
      }
    }
  }
}
