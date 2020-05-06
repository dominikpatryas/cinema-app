import { Injectable } from '@angular/core';
declare  let alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }

confirm(message: string, okCallBack: () => any) {
  alertify.confirm(message, function(e) {
    if (e) {
      okCallBack();
    } else {}
  });
}

success(message: string) {
  return alertify.success(message);
}

error(message: string) {
  return alertify.error(message);
}

warning(message: string) {
  return alertify.warning(message);
}

message(message: string) {
  return alertify.message(message);
}
}
