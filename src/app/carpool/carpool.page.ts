import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DbService} from '../services/db.service';
import {Carpool} from '../models/carpool';
import {paymentArt} from '../models/paymentArt';
import * as moment from 'moment';
import {Tour} from '../models/tour';

@Component({
    selector: 'app-carpool',
    templateUrl: './carpool.page.html',
    styleUrls: ['./carpool.page.scss'],
})
export class CarpoolPage implements OnInit {
    private id: string;
    public selectedCarpool: Promise<Carpool>;
    public perDay = paymentArt.perDay;
    public perDrive = paymentArt.perDrive;

    constructor(private route: ActivatedRoute,
                private db: DbService) {
    }

    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.selectedCarpool = this.db.getCarpool(this.id);
    }

    startDrive() {
        this.selectedCarpool.then(carpool => {
            if (carpool.payment === paymentArt.perDay) {
                carpool.currentMonth.push({
                    day: moment().format('DD.MM.YYYY')
                } as Tour);
            } else {
                carpool.currentMonth.push({
                    day: moment().format('DD.MM.YYYY'),
                    time: moment().format('HH:MM')
                } as Tour);
            }
            this.db.saveCarpool(carpool);
        });
    }

    getRides(rides: string[]): number {
        return rides.length;
    }

    calculate(rides: number, price: number) {
        return rides * price;
    }

}
