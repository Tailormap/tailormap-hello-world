import { NgModule } from '@angular/core';
import { HelloWorldComponent } from './hello-world.component';
import { CoreModule, PanelComponentsService } from '@tailormap-viewer/core';
import { HelloWorldPanelComponent } from './hello-world-panel.component';
import { HELLO_WORLD_COMPONENT_ID } from './hello-world-component-id';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@tailormap-viewer/shared';
import { BaseComponentConfigComponent, ConfigurationComponentRegistryService } from '@tailormap-admin/admin-core';

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
    configurationComponentService: ConfigurationComponentRegistryService,
  ) {
    panelComponentsService.registerComponent({ type: HELLO_WORLD_COMPONENT_ID, component: HelloWorldPanelComponent });
    configurationComponentService.registerConfigurationComponents(HELLO_WORLD_COMPONENT_ID, 'Hello world', BaseComponentConfigComponent);
  }
}
