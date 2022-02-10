import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  private subject = new BehaviorSubject<string>("User");
  
  constructor() { }

  sendName(name:string){
    this.subject.next(name);
  }

  
  receiveName() : Observable<string>{
    return this.subject.asObservable();
  }
}
