import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AddCarpoolComponent} from './add-carpool/add-carpool.component';
import {FormsModule} from '@angular/forms';
import {EditCarpoolComponent} from './edit-carpool/edit-carpool.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BillingCheckDialogComponent} from './carpool/billing-check-dialog/billing-check-dialog.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';

@NgModule({
    declarations: [
        AppComponent,
        AddCarpoolComponent,
        EditCarpoolComponent,
        BillingCheckDialogComponent
    ],
    entryComponents: [AddCarpoolComponent, EditCarpoolComponent, BillingCheckDialogComponent],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !environment.production })
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
