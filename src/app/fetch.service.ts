import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchService {


  constructor(private http: HttpClient) { }

  fetchPokemon(url: string): Observable<any> {
    console.log('service');
    return this.http.get(url);
  }
}
