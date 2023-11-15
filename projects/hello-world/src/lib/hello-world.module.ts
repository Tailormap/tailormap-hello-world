import { NgModule } from '@angular/core';
import { HelloWorldComponent } from './hello-world.component';
import { CoreModule, PanelComponentsService } from '@tailormap-viewer/core';
import { HelloWorldPanelComponent } from './hello-world-panel.component';
import { HELLO_WORLD_COMPONENT_ID } from './hello-world-component-id';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@tailormap-viewer/shared';



@NgModule({
  declarations: [
    HelloWorldComponent,
    HelloWorldPanelComponent,
  ],
  imports: [
    CoreModule,
    SharedModule,
    CommonModule,
  ]
})
export class HelloWorldModule {
  constructor(
    panelComponentsService: PanelComponentsService,
  ) {
    panelComponentsService.registerComponent({ type: HELLO_WORLD_COMPONENT_ID, component: HelloWorldPanelComponent });
  }
}
