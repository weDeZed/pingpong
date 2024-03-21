import { Injectable,inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JoueurService {

  private http = inject(HttpClient)


  constructor() {}
  getJoueurs(){
    return this.http.get('http://127.0.0.1:5000/liste_joueurs');
    }



}
