import { NgModule } from '@angular/core';
import { HelloWorldComponent } from './hello-world.component';
import { CoreModule, PanelComponentsService } from '@tailormap-viewer/core';
import { HelloWorldPanelComponent } from './hello-world-panel.component';
import { HELLO_WORLD_COMPONENT_ID } from './hello-world-component-id';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@tailormap-viewer/shared';
import { BaseComponentConfigComponent, ConfigurationComponentRegistryService } from '@tailormap-admin/admin-core';
import { RouterModule } from '@angular/router';
import { HelloWorldPageComponent } from './hello-world-page.component';

@NgModule({
  declarations: [
    HelloWorldComponent,
    HelloWorldPanelComponent,
    HelloWorldPageComponent,
  ],
  imports: [
    CoreModule,
    SharedModule,
    CommonModule,
    RouterModule.forChild([{
      path: 'ext/hello-world',
      component: HelloWorldPageComponent,
    }]),
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
