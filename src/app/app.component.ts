import {Component} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {AddCarpoolComponent} from './home/add-drive/add-carpool.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'DriveWithMe';
    private isMobileResolution: boolean;

    constructor(public dialog: MatDialog) {
        if (window.innerWidth < 768) {
            this.isMobileResolution = true;
        } else {
            this.isMobileResolution = false;
        }
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
            console.log('The dialog was closed');
        });
    }
}
