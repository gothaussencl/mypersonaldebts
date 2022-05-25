import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaRegistrosComponent } from './tabla-registros/tabla-registros.component';

@NgModule({
  declarations: [TablaRegistrosComponent],
  imports: [CommonModule],
  exports: [TablaRegistrosComponent],
})
export class ComponentsModule {}
