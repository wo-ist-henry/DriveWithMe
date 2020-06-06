import {Component, OnInit} from '@angular/core';
import {DbService} from '../services/db.service';
import {ModalController} from '@ionic/angular';
import {AddCarpoolComponent} from '../add-carpool/add-carpool.component';
import {Carpool} from '../models/carpool';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {loadCarpools} from './+state/home.actions';
import {filter, map} from 'rxjs/operators';
import {HomeState} from './+state/home.reducer';


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    public carpools: Carpool[];
    public carpools$: Observable<Carpool[]>;

    constructor(private  db: DbService,
                public modalController: ModalController,
                private store: Store<HomeState>) {
    }

    ngOnInit(): void {
        this.loadCarpools();
    }

    async AddCarpool() {
        const modal = await this.modalController.create({
            component: AddCarpoolComponent
        });
        modal.onDidDismiss().then(async _ => {
            this.loadCarpools();
        });
        return await modal.present();
    }

    loadCarpools() {
        this.store.dispatch(loadCarpools());
        this.carpools$ = this.store.pipe(
            filter(state => !!state),
            map(state =>
                state.home.carpools
            ));
    }

    getListItemColor(i: number) {
        if (i % 2 === 0) {
            return 'even';
        } else {
            return 'odd';
        }
    }
}
