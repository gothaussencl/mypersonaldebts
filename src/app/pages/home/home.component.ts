import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DebtService } from 'src/app/service/debt.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public router: Router, public _debts: DebtService) {}

  ngOnInit(): void {}

  getDebts() {
    this._debts.loadDebts();
  }

  delete(debt: any) {
    this._debts.delete(debt);
  }

  pagado(debt: any) {
    this._debts.pagado(debt);
  }
}
