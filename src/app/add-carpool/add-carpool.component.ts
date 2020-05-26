import {Component} from '@angular/core';
import {paymentArt, ZahlArt} from '../models/paymentArt';
import {DbService} from '../services/db.service';
import {AlertController, ModalController, PickerController} from '@ionic/angular';
import {Guid} from 'guid-typescript';
import {Carpool} from '../models/carpool';
import {openPicker} from '../functions/picker';

@Component({
    selector: 'app-add-carpool',
    templateUrl: './add-carpool.component.html',
    styleUrls: ['./add-carpool.component.scss'],
})
export class AddCarpoolComponent {
    public carpoolDriver = '';
    public zahlart: ZahlArt = {
        view: 'Bitte wählen',
        value: paymentArt.default
    };
    public price = 0;

    constructor(private db: DbService,
                private modalCtrl: ModalController,
                private pickerCtrl: PickerController,
                private alertController: AlertController) {
    }

    save() {
        if (this.carpoolDriver !== '' && this.zahlart.value !== paymentArt.default && this.price !== 0) {
            const carpool = {
                id: Guid.create().toString(),
                driver: this.carpoolDriver,
                payment: this.zahlart.value,
                price: this.price,
                currentMonth: []
            } as Carpool;
            this.db.createNewDrive(carpool);
            this.exit();
        } else {
            this.missingInfo();
        }
    }

    async missingInfo() {
        const alert = await this.alertController.create({
            header: 'Fehler',
            message: 'Es sind nicht alle Felder ausgefüllt',
            buttons: ['OK']
        });
        await alert.present();
    }

    async openPicker() {
        openPicker(this.pickerCtrl).then(zahlArt => {
            this.zahlart = zahlArt;
        });
    }

    exit() {
        this.modalCtrl.dismiss();
    }
}
