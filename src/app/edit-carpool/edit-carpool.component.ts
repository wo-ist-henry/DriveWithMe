import {Component, Input, OnInit} from '@angular/core';
import {paymentArt, ZahlArt} from '../models/paymentArt';
import {DbService} from '../services/db.service';
import {AlertController, ModalController, PickerController} from '@ionic/angular';
import {Carpool} from '../models/carpool';
import {openPicker} from '../functions/picker';

@Component({
  selector: 'edit-add-carpool',
  templateUrl: './edit-carpool.component.html',
  styleUrls: ['./edit-carpool.component.scss'],
})
export class EditCarpoolComponent implements OnInit {
  private id: string;
  public carpoolDriver = '';
  public zahlart: ZahlArt = {
    view: '',
    value: paymentArt.default
  };
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
      this.zahlart.value = carpool.payment;
      if (carpool.payment === paymentArt.perDay) {
        this.zahlart.view = 'Pro Tag';
      } else {
        this.zahlart.view = 'Pro Fahrt';
      }
      this.price = carpool.price;
      this.currentMonth = carpool.currentMonth;
    });
  }

  save() {
    if (this.carpoolDriver !== '' && this.zahlart.value !== paymentArt.default && this.price !== 0) {
      const carpool = {
        id: this.id,
        driver: this.carpoolDriver,
        payment: this.zahlart.value,
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
    openPicker(this.pickerCtrl).then(zahlArt => {
      this.zahlart = zahlArt;
    });
  }

  exit() {
    this.modalCtrl.dismiss();
  }
}
