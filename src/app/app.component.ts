import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddCarpoolComponent} from './home/add-drive/add-carpool.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DriveWithMe';

  constructor(public dialog: MatDialog) {
  }

  addDrive(): void {
    const dialogRef = this.dialog.open(AddCarpoolComponent, {
      width: '35%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
