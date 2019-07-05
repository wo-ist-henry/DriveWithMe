import {Component, OnInit} from '@angular/core';
import {DbService} from '../services/db.service';
import {ModalController} from '@ionic/angular';
import {AddCarpoolComponent} from '../add-carpool/add-carpool.component';
import {Carpool} from '../models/carpool';
import {Guid} from 'guid-typescript';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    public carpools$: Promise<Carpool[]>;

    constructor(private  db: DbService,
                public modalController: ModalController) {
    }

    ngOnInit(): void {
        this.loadCarpools();
    }

    async AddCarpool() {
        const modal = await this.modalController.create({
            component: AddCarpoolComponent
        });
        modal.onDidDismiss().then(async _ => {
            this.loadCarpools();
        });
        return await modal.present();
    }

    loadCarpools() {
     this.carpools$ = this.db.getCarpools();
    }
}
