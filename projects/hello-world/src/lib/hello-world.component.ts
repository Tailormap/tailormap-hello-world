import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { HELLO_WORLD_COMPONENT_ID } from './hello-world-component-id';
import { MenubarService } from '@tailormap-viewer/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'lib-hello-world',
  templateUrl: 'hello-world.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelloWorldComponent implements OnInit {

  public active$: Observable<boolean> = of(false);

  constructor(
    private menubarService: MenubarService,
  ) { }

  public ngOnInit(): void {
    this.active$ = this.menubarService.isComponentVisible$(HELLO_WORLD_COMPONENT_ID);
  }

  public handleClick() {
    this.menubarService.toggleActiveComponent(HELLO_WORLD_COMPONENT_ID, $localize `:@@tailormap-ext-hello-world.panel-title:Hello World!`);
  }

}
