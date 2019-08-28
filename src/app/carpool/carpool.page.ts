import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DbService} from '../services/db.service';
import {Carpool} from '../models/carpool';
import {paymentArt} from '../models/paymentArt';
import * as moment from 'moment';
import {Tour} from '../models/tour';
import {ModalController, NavController} from '@ionic/angular';
import {HomePage} from '../home/home.page';
import {AddCarpoolComponent} from '../add-carpool/add-carpool.component';
import {EditCarpoolComponent} from '../edit-carpool/edit-carpool.component';

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
                private db: DbService,
                private navCtrl: NavController,
                public modalController: ModalController) {
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

    getRides(rides: Tour[]): number {
        return rides.length;
    }

    calculate(rides: number, price: number) {
        return rides * price;
    }

    removeCarpool() {
        this.db.deleteCarpool(this.id);
        this.navCtrl.pop();
    }

    async editCarpool() {
            const modal = await this.modalController.create({
                component: EditCarpoolComponent,
                componentProps: {
                    carpool: this.selectedCarpool
                }
            });
            modal.onDidDismiss().then(async _ => {
                this.selectedCarpool = this.db.getCarpool(this.id);
            });
            return await modal.present();
        }
}
