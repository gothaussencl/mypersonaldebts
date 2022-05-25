import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDebtComponent } from './add-debt.component';
import { AddDebtRoutingModule } from './add-debt-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddDebtComponent],
  imports: [
    CommonModule,
    AddDebtRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class AddDebtModule {}
