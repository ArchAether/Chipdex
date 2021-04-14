import { Injectable } from '@angular/core';
import { Chip } from './chip';
import { Observable, of } from 'rxjs';

import  chipCatalogue  from './chipCatalogue.json';

@Injectable({
  providedIn: 'root'
})
export class ChipService {

  constructor() { }

  getChips(): Observable<Chip[]> {
    const chips = of (chipCatalogue);
    return chips;
  }
}
