import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import {IonicModule} from '@ionic/angular';
import {CarpoolPage} from './carpool.page';

const routes: Routes = [
    {
        path: '',
        component: CarpoolPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        MatDialogModule,
    ],
    declarations: [CarpoolPage]
})
export class CarpoolPageModule {
}
