import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HelloWorldService } from './hello-world.service';

@Component({
  selector: 'lib-hello-world-page',
  templateUrl: 'hello-world-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelloWorldPageComponent {

  public helloWorldMessage: string;

  constructor(
    private helloWorldService: HelloWorldService,
  ) {
    this.helloWorldMessage = this.helloWorldService.getMessage();
  }

}
