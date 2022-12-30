import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs';
import { Curso } from '../models/curso';


@Injectable({
  providedIn: 'root'
})
export class CursoService {
  
  url = 'https://localhost:7134/cursos';
  cadastrou = new EventEmitter<boolean>()

  //injetando httpClient
  constructor(private httpClient: HttpClient){}

  //Headers

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  //Obtem todos os cursos
  getCursos(): Observable<Curso[]>{
    return this.httpClient.get<Curso[]>(this.url).pipe(retry(2), catchError(this.handleError))
  }

  //Cadastra Curso

  saveCurso(curso: Curso) : Observable<Curso>{
    return this.httpClient.post<Curso>(this.url, JSON.stringify(curso), this.httpOptions).pipe(retry(1), catchError(this.handleError))
  }

  //Edita Curso

  updateCurso(curso: Curso) : Observable<Curso>{
    return this.httpClient.put<Curso>(this.url + '/' + curso.cursoId, JSON.stringify(curso), this.httpOptions).pipe(retry(1), catchError(this.handleError))
  }

  //deleta Curso

  deleteCurso(curso: Curso){
    return this.httpClient.delete<Curso>(this.url + '/' + curso.cursoId).pipe(retry(1), catchError(this.handleError))
  }

  //Erros

  handleError(error: HttpErrorResponse){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){//Erro lado CLIENTE
      console.log(error);
      errorMessage = error.error.message;
    }else{//erro lado SERVIDOR
      console.log(error); 
      errorMessage = 'Código de erro: ${error.status}, ' + 'mensagem: ${error.message}';
      alert('Erro ao se conectar com o Servidor.');
    }
    return throwError(errorMessage)
  }
  
  cadastroSucesso(){
    this.cadastrou.emit(true)
  }

}
