import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { Settings } from '../modal/settings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private basePath = 'ops';

  constructor(
    private httpClient: HttpClient,
  ) { }
  /**
   * 检查程序是否设置了nameserver
   */
  checkInit(): Observable<boolean> {
    return this.getSettings().pipe(map(response => {
      console.log(response)
      return !!response['namesvrAddrList']
    }));
  }
  /**
   * 获取所有的设置内容
   */
  getSettings(): Observable<Settings> {
    return this.httpClient.get<Settings>(`${this.basePath}/homePage.query`);
  }

  getClusterStatus(): Observable<Map<string, any>> {
    return this.httpClient.get<Map<string, any>>(`${this.basePath}/rocketMqStatus.query`);
  }

  updateNameSvrAddr(nameSvrAddrList:string):Observable<boolean>{
    return this.httpClient.post<boolean>(`${this.basePath}/updateNameSvrAddr.do?nameSvrAddrList=${nameSvrAddrList}`, null);
  }

  updateIsVIPChannel(useVIPChannel:boolean):Observable<boolean>{
    return this.httpClient.post<boolean>(`${this.basePath}/updateIsVIPChannel.do?useVIPChannel=${useVIPChannel}`, null);
  }
}
