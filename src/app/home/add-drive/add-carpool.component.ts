import {Component, OnInit} from '@angular/core';
import {Paystyle, PaystyleEnum} from '../../Models/paystyle';
import {Guid} from 'guid-typescript';
import {FormControl, Validators} from '@angular/forms';
import {Carpool} from '../../Models/carpool';
import {MatDialogRef} from '@angular/material/dialog';
import {DbService} from '../../Service/db.service';

@Component({
    selector: 'app-add-drive',
    templateUrl: './add-carpool.component.html',
    styleUrls: ['./add-carpool.component.scss']
})
export class AddCarpoolComponent implements OnInit {
    paystyles = [{
        value: PaystyleEnum.perDay,
        viewValue: 'Per Day'
    }, {
        value: PaystyleEnum.perDrive,
        viewValue: 'Per Drive'
    }];
    driver: string;
    payment: PaystyleEnum;
    driverControl = new FormControl('', Validators.required);
    paymentControl = new FormControl('', Validators.required);
    costControl = new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]);

    constructor(private dialogRef: MatDialogRef<AddCarpoolComponent>,
                private db: DbService) {
    }

    ngOnInit(): void {
    }

    save() {
        this.costControl.markAllAsTouched();
        if (this.driver !== '' && this.payment != null && this.isNumber(this.costControl.value)) {
            const carpool = {
                id: Guid.create().toString(),
                driver: this.driver,
                payment: this.payment,
                price: Number(this.costControl.value),
                currentMonth: []
            } as Carpool;
            console.log(carpool);
            this.db.createNewDrive(carpool);
            this.exit();
        }
    }

    exit() {
        this.dialogRef.close();
    }

    isNumber(input: string): boolean {
        return !isNaN(Number(input));
    }
}
