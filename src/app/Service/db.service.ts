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
        localforage.getItem(this.carpoolDBName).then(carpoolDB => {
            if (carpoolDB == null) {
                localforage.setItem('carpools', [newCarpool]);
            } else {
                const newDB: Carpool[] = carpoolDB as Carpool[];
                newDB.push(newCarpool);
                localforage.setItem(this.carpoolDBName, newDB);
            }
        });
    }

    getCarpools(): Promise<Carpool[]> {
        return localforage.getItem(this.carpoolDBName).then(data => data) as Promise<Carpool[]>;
    }

    async getCarpool(guid: string): Promise<Carpool> {
        const carpools = await this.getCarpools();
        return carpools.find(carpool => {
            if (carpool.id === guid) {
                return true;
            }
        });
    }

    saveCarpool(carpoolForSave: Carpool) {
        localforage.getItem(this.carpoolDBName).then(carpoolDB => {
                if (carpoolDB == null) {
                    localforage.setItem('carpools', [carpoolForSave]);
                } else {
                    const db: Carpool[] = carpoolDB as Carpool[];
                    const index = db.findIndex(carpool => {
                        if (carpool.id === carpoolForSave.id) {
                            return true;
                        }
                    });
                    carpoolDB[index] = carpoolForSave;
                    localforage.setItem(this.carpoolDBName, carpoolDB);
                }
            }
        );
    }

    deleteCarpool(carpoolIdForTrash: string) {
        localforage.getItem(this.carpoolDBName).then(carpoolDB => {
            if (carpoolDB != null) {
                const db: Carpool[] = carpoolDB as Carpool[];
                const index = db.findIndex(carpool => {
                    if (carpool.id === carpoolIdForTrash) {
                        return true;
                    }
                });
                db.splice(index, 1);
                localforage.setItem(this.carpoolDBName, db);
            }
        });
    }

    payAndMoveToArchive(carpoolIdForArchive: string) {
        localforage.getItem(this.carpoolDBName).then(carpoolDB => {
            if (carpoolDB != null) {
                const db: Carpool[] = carpoolDB as Carpool[];
                const index = db.findIndex(carpool => {
                    if (carpool.id === carpoolIdForArchive) {
                        return true;
                    }
                });
                db[index].archive = db[index].currentMonth;
                db[index].currentMonth = [];
                localforage.setItem(this.carpoolDBName, db);
            }
        });
    }
}
