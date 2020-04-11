import {Component, OnInit} from '@angular/core';
import {DbService} from '../Service/db.service';
import {Carpool} from '../Models/Carpool';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {AddCarpoolComponent} from './add-drive/add-carpool.component';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public carpools$: Promise<Carpool[]>;
    private isMobileResolution: boolean;

    constructor(private  db: DbService, private dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.loadCarpools();
    }

    loadCarpools() {
        this.carpools$ = this.db.getCarpools();
    }

    addDrive(): void {
        let dialogRef: MatDialogRef<AddCarpoolComponent, any>;
        if (!this.isMobileResolution){
            dialogRef = this.dialog.open(AddCarpoolComponent, {
                width: '35%',
            });
        } else {
            dialogRef = this.dialog.open(AddCarpoolComponent, {
                width: '85%',
            });
        }

        dialogRef.afterClosed().subscribe(result => {
            this.loadCarpools();
        });
    }

    getListItemColor(i: number) {
        if (i % 2 === 0) {
            return 'even';
        } else {
            return 'odd';
        }
    }

}
