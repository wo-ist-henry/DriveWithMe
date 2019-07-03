import {Component} from '@angular/core';
import {DbService} from '../services/db.service';
import {paymentArt} from '../models/paymentArt';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    public carpools$ = this.db.getCarpools();

    constructor(private  db: DbService) {
    }

    AddDrive() {
        const carpool = {
            id: 1,
            driver: 'Melanie',
            payment: paymentArt.daily,
            currentMonth: []
        };
        this.db.createNewDrive(carpool);
        this.carpools$ = this.db.getCarpools();
    }
}
