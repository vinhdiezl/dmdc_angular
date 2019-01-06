import { Injectable } from '@angular/core';
import { PeriodicElement } from './PeriodicElement';
import { ELEMENT_DATA} from './mock-periodicElements';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElementsService {

  constructor() { }

  getElements() : Observable<PeriodicElement[]>{
    return of(ELEMENT_DATA);
  }
}
