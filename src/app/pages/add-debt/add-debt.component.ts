import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DebtService } from 'src/app/service/debt.service';

@Component({
  selector: 'app-add-debt',
  templateUrl: './add-debt.component.html',
  styleUrls: ['./add-debt.component.scss'],
})
export class AddDebtComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _debts: DebtService,
    private router: Router
  ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      fecha: ['', Validators.required],
      cuotas: ['', Validators.required],
      monto: ['', Validators.required],
      origen: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  saveDebt() {
    this._debts.saveDebts(this.form.value);

    this.router.navigateByUrl('/home');
  }
}
