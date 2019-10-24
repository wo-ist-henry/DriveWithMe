import { Component, OnInit } from '@angular/core';
import {DbService} from '../services/db.service';

@Component({
  selector: 'app-export',
  templateUrl: './export.page.html',
  styleUrls: ['./export.page.scss'],
})
export class ExportPage implements OnInit {

  public checkedMap = {};
  public carpools$ = this.db.getCarpools();

  constructor(private db: DbService) { }

  ngOnInit() {
  }

  buttonDisabled(checkedMap: {}) {
    let enabled = false;

    for (const isSelected of Object.values(checkedMap)) {
      if (isSelected) {
        enabled = true;
      }
    }

    return !enabled;
  }

  async exportData() {
    const carpools = await this.carpools$;

    const selectedCarpools = Object.keys(this.checkedMap)
        .filter(carpoolId => !!this.checkedMap[carpoolId])
        .map(carpoolId => carpools.find(c => c.id === carpoolId));

    this.createDownlableFile(selectedCarpools, 'carpools');
  }

  // create a href-tag to open a download / remove tag after
  private createDownlableFile(data, fileName: string) {
      const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data));
      const downloadAnchorNode = document.createElement('a');
      downloadAnchorNode.setAttribute('href',     dataStr);
      downloadAnchorNode.setAttribute('download', fileName + '.json');
      document.body.appendChild(downloadAnchorNode); // required for firefox
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
  }
}
