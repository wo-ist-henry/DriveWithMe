import {Component, OnInit} from '@angular/core';
import {paymentArt} from '../models/paymentArt';
import {DbService} from '../services/db.service';
import {AlertController, ModalController, PickerController} from '@ionic/angular';
import {PickerOptions} from '@ionic/core';
import {Guid} from 'guid-typescript';
import {Carpool} from '../models/carpool';

@Component({
    selector: 'app-add-carpool',
    templateUrl: './add-carpool.component.html',
    styleUrls: ['./add-carpool.component.scss'],
})
export class AddCarpoolComponent implements OnInit {
    public carpoolDriver = '';
    public zahlartView = 'Bitte wählen';
    public zahlartValue = paymentArt.default;
    public price = 0;

    constructor(private db: DbService,
                private modalCtrl: ModalController,
                private pickerCtrl: PickerController,
                private alertController: AlertController) {
    }


    ngOnInit() {
    }

    save() {
        if (this.carpoolDriver !== '' && this.zahlartValue !== paymentArt.default && this.price !== 0) {
            const carpool = {
                id: Guid.create().toString(),
                driver: this.carpoolDriver,
                payment: this.zahlartValue,
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
        const opts: PickerOptions = {
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Fertig'
                }
            ],
            columns: [
                {
                    name: 'Zahlart',
                    options: [
                        {text: 'Pro Fahrt', value: paymentArt.perDrive},
                        {text: 'Pro Tag', value: paymentArt.perDay},
                    ]
                }
            ]
        };
        const picker = await this.pickerCtrl.create(opts);
        picker.present();
        picker.onDidDismiss().then(async data => {
            const col = await picker.getColumn('Zahlart');
            this.zahlartView = col.options[col.selectedIndex].text;
            this.zahlartValue = col.options[col.selectedIndex].value;
        });
    }

    exit() {
        this.modalCtrl.dismiss();
    }
}
