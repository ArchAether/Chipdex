import { Injectable } from '@angular/core';
import { Chip } from './chip';
import { Observable, of } from 'rxjs';
import  chipCatalogue  from './chipCatalogue.json';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChipService {

  constructor(private http: HttpClient) { }

  /*getChips(): Observable<Chip[]> {
    const chips = of (chipCatalogue);
    return chips;
  }*/
  
  getChips(): Observable<Chip[]> {
    console.log("Got to getChips()");
    return this.http.get<Chip[]>("http://localhost:8080/BattleChips");
  }
}
