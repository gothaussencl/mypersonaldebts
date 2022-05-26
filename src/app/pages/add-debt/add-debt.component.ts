import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DebtService } from 'src/app/service/debt.service';

@Component({
  selector: 'app-add-debt',
  templateUrl: './add-debt.component.html',
  styleUrls: ['./add-debt.component.scss'],
})
export class AddDebtComponent implements OnInit {
  form: FormGroup;

  isEdit: boolean = false;
  uid: any = '';

  constructor(
    private fb: FormBuilder,
    private _debts: DebtService,
    private router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      fecha: ['', Validators.required],
      cuotas: ['', Validators.required],
      monto: ['', Validators.required],
      origen: ['', Validators.required],
      pagos: [[]],
      uid: [''],
    });

    this.form.get('origen')?.valueChanges.subscribe((value) => {
      if (value === '4')
        this.form.addControl('otro', new FormControl('', Validators.required));
      else this.form.removeControl('otro');
    });

    this._activatedRoute.paramMap.subscribe((param) => {
      this.uid = param.get('id');
      if (this.uid) {
        this.isEdit = true;
        this.getData();
      }
    });
  }

  ngOnInit(): void {}

  saveDebt() {
    if (this.isEdit) this._debts.updateDebt(this.form.value);
    else this._debts.saveDebts(this.form.value);

    this.router.navigateByUrl('/home');
  }

  getData() {
    let debt = this._debts.getDebt(this.uid);

    this.form.setValue({
      nombre: debt.nombre,
      fecha: debt.fecha,
      cuotas: debt.cuotas,
      monto: debt.monto,
      origen: debt.origen,
      pagos: debt.pagos,
      uid: debt.uid,
      otro: debt.otro,
    });
  }
}
