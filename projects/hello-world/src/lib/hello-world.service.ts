import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelloWorldService {

  constructor() { }

  public getMessage() {
    return $localize `:@@tailormap-ext-hello-world.hello-message:Hello world! I\'m on Tailormap 11!`;
  }

}
