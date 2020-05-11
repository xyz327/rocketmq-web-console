import { Component, OnInit } from '@angular/core';
import { SettingsService } from './service/settings.service';
import { Router } from '@angular/router';
import {  NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private settingsService: SettingsService,
    private nzModalService:NzModalService,
    private router: Router,
  ) {

  }
  ngOnInit(): void {
    this.settingsService.checkInit().subscribe(result=>{
        if(!result){
          this.nzModalService.confirm({
            nzContent:'请先设置nameserver地址'
          })
          this.router.navigate(['settings'])
        }
    });
  }
}
