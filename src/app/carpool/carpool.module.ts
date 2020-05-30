import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';

import {IonicModule} from '@ionic/angular';

import {CarpoolPage} from './carpool.page';
import {StoreModule} from '@ngrx/store';

import * as fromCarpools from './+state/carpool.reducer';
import {EffectsModule} from '@ngrx/effects';
import {CarpoolEffect} from './+state/carpool.effect';

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
        StoreModule.forFeature(fromCarpools.carpoolFeatureKey, fromCarpools.carpoolReducer),
        EffectsModule.forFeature([CarpoolEffect])
    ],
    declarations: [CarpoolPage]
})
export class CarpoolPageModule {
}
