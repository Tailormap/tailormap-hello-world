import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MenubarService } from '@tailormap-viewer/core';
import { HelloWorldService } from './hello-world.service';
import { HELLO_WORLD_COMPONENT_ID } from './hello-world-component-id';
import { Observable } from 'rxjs';
import { HelloWorldComponent } from './hello-world.component';

@Component({
  selector: 'lib-hello-world-panel',
  templateUrl: 'hello-world-panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelloWorldPanelComponent {

  public visible$: Observable<boolean>;
  public helloWorldMessage: string;

  constructor(
    private menubarService: MenubarService,
    private helloWorldService: HelloWorldService,
  ) {
    this.visible$ = this.menubarService.isComponentVisible$(HELLO_WORLD_COMPONENT_ID);
    this.helloWorldMessage = this.helloWorldService.getMessage();
    this.menubarService.registerComponent({ type: HELLO_WORLD_COMPONENT_ID, component: HelloWorldComponent });
  }

}
