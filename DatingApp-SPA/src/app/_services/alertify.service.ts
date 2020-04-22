import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';
import { ok } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  confirm(message: string, okCallBack: () => any) {
    alertify.confirm(message, (e: any) => {
      if (e) {
        okCallBack();
      }
      else { }
    });
  }

  success(message: string) {
    alertify.success(message);
  }

  error(message: string) {
    alertify.error(message);
  }

  warning(message: string) {
    alertify.waring(message);
  }

  message(message: string) {
    alertify.message(message);
  }
}
