import { formatDate } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabla-registros',
  templateUrl: './tabla-registros.component.html',
  styleUrls: ['./tabla-registros.component.scss'],
})
export class TablaRegistrosComponent implements OnInit {
  @Input() debts: Array<any> = [];

  @Output() deleteEvent = new EventEmitter();
  @Output() pagadoEvent = new EventEmitter();

  dateNow: any;

  constructor() {
    this.dateNow = new Date();
  }

  ngOnInit(): void {}

  delete(debt: any) {
    this.deleteEvent.emit(debt);
  }

  pagado(debt: any) {
    this.pagadoEvent.emit(debt);
  }

  getPagoActual(debt: any) {
    return debt.pagos.find((p: any) => {
      let monthAndYearNow = formatDate(this.dateNow, 'yyyy-MM', 'en');
      let monthAndYearDebt = formatDate(p, 'yyyy-MM', 'en');
      return monthAndYearDebt === monthAndYearNow;
    })
      ? true
      : false;
  }

  getTotal() {
    return this.debts.reduce((sum, current) => sum + current.monto, 0);
  }

  getRestantes(debt: any) {
    let pagados = debt.pagos.length;

    return debt.cuotas - pagados;
  }
}
