import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelloWorldService {

  constructor() { }

  public getMessage() {
    return 'Hello world! I\'m on Tailormap 11!';
  }

}
