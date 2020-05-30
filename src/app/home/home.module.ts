import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';

import {HomePage} from './home.page';
import {StoreModule} from '@ngrx/store';
import * as fromHome from './+state/home.reducer';
import {EffectsModule} from '@ngrx/effects';
import {HomeEffect} from './+state/home.effect';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomePage
            }
        ]),
        StoreModule.forFeature(fromHome.homeFeatureKey, fromHome.homeReducer),
        EffectsModule.forFeature([HomeEffect])
    ],
    declarations: [HomePage]
})
export class HomePageModule {
}
