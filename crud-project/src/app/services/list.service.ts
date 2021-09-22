import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  url = 'http://localhost:3000/list'; // api rest fake

  constructor(private readonly httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos
  getList(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // save iten
 saveItem(item: Item): Observable<Item> {
   return this.httpClient.post<Item>(this.url, JSON.stringify(item), this.httpOptions)
     .pipe(
       retry(2),
       catchError(this.handleError)
     )
 }


  updateItem(item: Item): Observable<Item> {
    return this.httpClient.put<Item>(this.url + '/' + item.id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

 deleteItem(item: Item) {
   return this.httpClient.delete<Item>(this.url + '/' + item.id, this.httpOptions)
     .pipe(
       retry(1),
       catchError(this.handleError)
     )
 }

  // Manipulação de erros
 handleError(error: HttpErrorResponse) {
   let errorMessage = '';
   if (error.error instanceof ErrorEvent) {
     // Erro ocorreu no lado do client
     errorMessage = error.error.message;
   } else {
     // Erro ocorreu no lado do servidor
     errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
   }
   console.log(errorMessage);
   return throwError(errorMessage);
 };

}
