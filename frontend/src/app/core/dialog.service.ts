import { Injectable } from '@angular/core';
import { DialogButton } from '../../../libs/dialog-button.type';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor() { }

  public isDialogOpen: boolean = false;
  public header: string = '';
  public body: string = '';
  public buttons: DialogButton[] = [];

  public showDialog(header: string, body: string, buttons: DialogButton[]) {
    this.header = header;
    this.body = body;
    this.buttons = buttons;
    this.isDialogOpen = true;
  }
}
