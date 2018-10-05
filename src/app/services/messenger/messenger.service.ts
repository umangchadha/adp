import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

header:any="Characters";

headerChange(x){
  this.header=x
}
}
