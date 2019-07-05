import {Component, OnInit} from '@angular/core';
import {paymentArt} from '../models/paymentArt';
import {DbService} from '../services/db.service';
import {ModalController, PickerController} from '@ionic/angular';
import {PickerOptions} from '@ionic/core';
import {Guid} from 'guid-typescript';
import {Carpool} from '../models/carpool';

@Component({
    selector: 'app-add-carpool',
    templateUrl: './add-carpool.component.html',
    styleUrls: ['./add-carpool.component.scss'],
})
export class AddCarpoolComponent implements OnInit {
    carpoolDriver: string;
    zahlartView = 'Bitte wählen';
    zahlartValue: paymentArt;
    price: number;

    constructor(private db: DbService,
                private modalCtrl: ModalController,
                private pickerCtrl: PickerController) {
    }


    ngOnInit() {
    }

    save() {
        const carpool = {
            id: Guid.create().toString(),
            driver: this.carpoolDriver,
            payment: this.zahlartValue,
            price: this.price,
            currentMonth: []
        } as Carpool;
        this.db.createNewDrive(carpool);
        this.exit();
    }

    async openPicker() {
        const opts: PickerOptions = {
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Done'
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
