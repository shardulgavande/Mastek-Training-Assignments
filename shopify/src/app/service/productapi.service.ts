import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IProducts } from '../IProducts';

@Injectable({
  providedIn: 'root'
})
export class ProductapiService {
  private base_url = "http://localhost:3000";
  http_option = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private httpClient:HttpClient) { }
  getProducts():Observable<IProducts []>{
    return this.httpClient.get<IProducts[]>(this.base_url+"/products");
  }
  handleError(error:HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('An error occurred:',error.error.message);
    }
    else{
      console.error(`Backend returned code ${error.status},` +
      `body was:  ${error.error}`);
    }
    return throwError(
      `Something bad happened; please try again later`
    );
  };
}
