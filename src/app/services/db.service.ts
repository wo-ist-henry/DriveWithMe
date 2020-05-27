import {Injectable} from '@angular/core';
import {Carpool} from '../models/carpool';
import * as localforage from 'localforage';

@Injectable({
    providedIn: 'root'
})
export class DbService {
    private carpoolDBName = 'carpools';

    constructor() {
    }

    createNewDrive(newCarpool: Carpool) {
        const carpools = this.getCarpools();
        if (carpools == null) {
            localStorage.setItem(this.carpoolDBName, JSON.stringify([newCarpool]));
        } else {
            const newDB: Carpool[] = carpools;
            newDB.push(newCarpool);
            localStorage.setItem(this.carpoolDBName, JSON.stringify(newDB));
        }
    }

    getCarpools(): Carpool[] {
        return JSON.parse(localStorage.getItem(this.carpoolDBName));
    }

    getCarpool(guid: string): Carpool {
        const carpools = this.getCarpools();
        return carpools.find(carpool => {
            if (carpool.id === guid) {
                return true;
            }
        });
    }

    saveCarpool(carpoolForSave: Carpool) {
        const carpools = this.getCarpools();
        if (carpools == null) {
            carpools.push(carpoolForSave);
            localStorage.setItem(this.carpoolDBName, JSON.stringify(carpools));
        } else {
            const index = carpools.findIndex(carpool => {
                if (carpool.id === carpoolForSave.id) {
                    return true;
                }
            });
            carpools[index] = carpoolForSave;
            localStorage.setItem(this.carpoolDBName, JSON.stringify(carpools));
        }
    }


    deleteCarpool(carpoolIdForTrash: string) {
        const carpools = this.getCarpools();
        if (carpools != null) {
            const index = carpools.findIndex(carpool => {
                if (carpool.id === carpoolIdForTrash) {
                    return true;
                }
            });
            carpools.splice(index, 1);
            localStorage.setItem(this.carpoolDBName, JSON.stringify(carpools));
        }

    }

    payAndMoveToArchive(carpoolIdForArchive: string) {
        const carpools = this.getCarpools();
        if (carpools != null) {
            const index = carpools.findIndex(carpool => {
                if (carpool.id === carpoolIdForArchive) {
                    return true;
                }
            });
            carpools[index].archive = carpools[index].currentMonth;
            carpools[index].currentMonth = [];
            localStorage.setItem(this.carpoolDBName, JSON.stringify(carpools));
        }
    }
}
