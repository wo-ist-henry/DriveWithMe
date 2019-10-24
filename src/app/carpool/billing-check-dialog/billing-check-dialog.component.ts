import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Carpool} from '../../models/carpool';
import {gasCalculator} from '../../models/calculator';
import {DbService} from '../../services/db.service';

@Component({
  selector: 'app-billing-check-dialog',
  templateUrl: './billing-check-dialog.component.html',
  styleUrls: ['./billing-check-dialog.component.scss'],
})
export class BillingCheckDialogComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: Carpool,
               private dialogRef: MatDialogRef<BillingCheckDialogComponent>,
               private db: DbService ) {
  }

  gasCalc(rides: number, price: number): number {
    return gasCalculator(rides, price);
  }

  ngOnInit() {
  }

  pay() {
    this.db.payAndMoveToArchive(this.data.id);
    this.dialogRef.close();
  }
}
