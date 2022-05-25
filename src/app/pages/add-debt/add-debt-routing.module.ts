import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDebtComponent } from './add-debt.component';

const routes: Routes = [
  {
    path: '',
    component: AddDebtComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddDebtRoutingModule {}
