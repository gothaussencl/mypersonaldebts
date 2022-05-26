import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DebtService {
  debts: Array<any> = [];

  constructor() {
    this.loadDebts();
  }

  loadDebts() {
    this.debts = JSON.parse(localStorage.getItem('debts') || '[]');
  }

  saveDebts(debt: any) {
    let _debt = { ...debt, uid: uuidv4() };

    this.debts.push(_debt);

    localStorage.setItem('debts', JSON.stringify(this.debts));
  }

  delete(debt: any) {
    let _debts = this.debts.filter((p) => p.uid != debt.uid);

    this.debts = _debts;

    localStorage.setItem('debts', JSON.stringify(this.debts));
    this.loadDebts();
  }

  pagado(debt: any) {
    let objIndex = this.debts.findIndex((p) => p.uid === debt.uid);

    // actualizo array
    this.debts[objIndex].pagos.push(formatDate(new Date(), 'yyyy-MM-dd', 'en'));

    localStorage.setItem('debts', JSON.stringify(this.debts));
    this.loadDebts();
  }

  getDebt(uid: any) {
    return this.debts.find((p) => p.uid === uid);
  }

  updateDebt(debt: any) {
    let objIndex = this.debts.findIndex((p) => p.uid === debt.uid);

    this.debts[objIndex] = debt;

    localStorage.setItem('debts', JSON.stringify(this.debts));
    this.loadDebts();
  }
}
