import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/service/settings.service';
import { Observable } from 'rxjs';
import { Settings } from 'src/app/modal/settings';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  settings: Settings = {
    useVIPChannel: false,
    namesvrAddrList : []
  }
  namesvrAddrList=[]
  tokenSeparator=[';']
  constructor(
    private settingsService:SettingsService,
  ) { }

  ngOnInit(): void {
      this.settingsService.getSettings().subscribe(settings=>{
        this.settings = settings;
        settings.namesvrAddrList.forEach(val=>{
          this.namesvrAddrList.push({
            label: val,
            value: val
          })
        })

      });
  }
  isNotSelected(value: string): boolean {
    return this.settings.namesvrAddrList.indexOf(value) === -1;
  }

}
