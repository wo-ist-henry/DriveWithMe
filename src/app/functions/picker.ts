import {PickerOptions} from '@ionic/core';
import {paymentArt, ZahlArt} from '../models/paymentArt';
import {PickerController} from '@ionic/angular';

export async function openPicker(pickerCtrl: PickerController): Promise<ZahlArt> {
    const zahlart: ZahlArt = {value: paymentArt.default, view: ''};
    const opts: PickerOptions = {
        buttons: [
            {text: 'Cancel', role: 'cancel'},
            {text: 'Fertig'}
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
    const picker = await pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async _ => {
        const col = await picker.getColumn('Zahlart');
        zahlart.view = col.options[col.selectedIndex].text;
        zahlart.value = col.options[col.selectedIndex].value;
    });
    return zahlart;
}
