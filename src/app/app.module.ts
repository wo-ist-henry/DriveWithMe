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

@NgModule({
    declarations: [
        AppComponent,
        AddCarpoolComponent,
        EditCarpoolComponent
    ],
    entryComponents: [AddCarpoolComponent, EditCarpoolComponent],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        FormsModule,
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
