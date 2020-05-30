import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DbService} from '../services/db.service';
import {Carpool} from '../models/carpool';
import {paymentArt} from '../models/paymentArt';
import * as moment from 'moment';
import {Tour} from '../models/tour';
import {ModalController, NavController} from '@ionic/angular';
import {EditCarpoolComponent} from '../edit-carpool/edit-carpool.component';
import {MatDialog} from '@angular/material/dialog';
import {BillingCheckDialogComponent} from './billing-check-dialog/billing-check-dialog.component';
import {gasCalculator} from '../models/calculator';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {CarpoolLoadingEffect} from './+state/carpool.effect';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-carpool',
    templateUrl: './carpool.page.html',
    styleUrls: ['./carpool.page.scss'],
})
export class CarpoolPage implements OnInit {
    private id: string;
    public selectedCarpool: Carpool;
    public perDay = paymentArt.perDay;
    public perDrive = paymentArt.perDrive;
    selectedCarpool$: Observable<Carpool> = this.store.select(state => state.carpool);

    constructor(private route: ActivatedRoute,
                private db: DbService,
                private navCtrl: NavController,
                private modalController: ModalController,
                private dialog: MatDialog,
                private store: Store<{ carpool: Carpool }>
    ) {
    }

    ngOnInit() {
        // this.id = this.route.snapshot.paramMap.get('id');
        // this.selectedCarpool = this.db.getCarpool(this.id);
        this.store.dispatch({type: CarpoolLoadingEffect});
    }

    startDrive() {
        this.selectedCarpool$.pipe(map(carpool => {
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
        }));
    }

    getRides(rides: Tour[]): number {
        return rides.length;
    }

    calculate(rides: number, price: number) {
        return gasCalculator(rides, price);
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

    billDrive() {
        const dialogRef = this.dialog.open(BillingCheckDialogComponent, {
            width: '250px',
            data: this.selectedCarpool
        });
        dialogRef.afterClosed().subscribe(result => {
            this.selectedCarpool = this.db.getCarpool(this.id);
        });
    }
}
