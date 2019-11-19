import {Component, Input, OnInit} from '@angular/core';
import {paymentArt} from '../models/paymentArt';
import {DbService} from '../services/db.service';
import {AlertController, ModalController, PickerController} from '@ionic/angular';
import {PickerOptions} from '@ionic/core';
import {Carpool} from '../models/carpool';

@Component({
  selector: 'edit-add-carpool',
  templateUrl: './edit-carpool.component.html',
  styleUrls: ['./edit-carpool.component.scss'],
})
export class EditCarpoolComponent implements OnInit {
  private id: string;
  public carpoolDriver = '';
  public zahlartView = '';
  public zahlartValue = paymentArt.default;
  public price = 0;
  private currentMonth = [];

  @Input()
  carpool: Promise<Carpool>;


  constructor(private db: DbService,
              private modalCtrl: ModalController,
              private pickerCtrl: PickerController,
              private alertController: AlertController) {
  }

  ngOnInit() {
    this.carpool.then(carpool => {
      this.id = carpool.id;
      this.carpoolDriver = carpool.driver;
      this.zahlartValue = carpool.payment;
      if (carpool.payment === paymentArt.perDay) {
        this.zahlartView = 'Pro Tag';
      } else {
        this.zahlartView = 'Pro Fahrt';
      }
      this.price = carpool.price;
      this.currentMonth = carpool.currentMonth;
    });
  }

  save() {
    if (this.carpoolDriver !== '' && this.zahlartValue !== paymentArt.default && this.price !== 0) {
      const carpool = {
        id: this.id,
        driver: this.carpoolDriver,
        payment: this.zahlartValue,
        price: this.price,
        currentMonth: this.currentMonth
      } as Carpool;
      this.db.saveCarpool(carpool);
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
