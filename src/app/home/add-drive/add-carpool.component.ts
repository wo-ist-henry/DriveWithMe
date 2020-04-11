import {Component, OnInit} from '@angular/core';
import {Paystyle, PaystyleEnum} from '../../Models/paystyle';

@Component({
    selector: 'app-add-drive',
    templateUrl: './add-carpool.component.html',
    styleUrls: ['./add-carpool.component.scss']
})
export class AddCarpoolComponent implements OnInit {
    paystyles: Paystyle[];

    constructor() {
    }

    ngOnInit(): void {
        this.paystyles = [{
            value: PaystyleEnum.perDay,
            viewValue: 'Per Day'
        }, {
            value: PaystyleEnum.perDrive,
            viewValue: 'Per Drive'
        }];
    }

}
