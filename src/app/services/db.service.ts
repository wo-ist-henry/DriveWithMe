import {Injectable} from '@angular/core';
import {Carpool} from '../models/carpool';
import * as localforage from 'localforage';
import set = Reflect.set;

@Injectable({
    providedIn: 'root'
})
export class DbService {
    private carpoolDBName = 'carpools';

    constructor() {
    }

    createNewDrive(newCarpool: Carpool) {
        localforage.getItem(this.carpoolDBName).then((carpoolsDB) => {
            if (carpoolsDB == null) {
                localforage.setItem('carpools', [newCarpool]);
            } else {
                const newDB: Carpool[] = carpoolsDB as Carpool[];
                newDB.push(newCarpool);
                localforage.setItem(this.carpoolDBName, newDB);
            }
        });
    }

    getCarpools(): Promise<Carpool[]> {
        return localforage.getItem(this.carpoolDBName).then(data => data) as Promise<Carpool[]>;
    }
}
