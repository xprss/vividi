import { Injectable } from '@angular/core';
import { DialogButton } from '../../lib/dialog-button.type';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor() {}

  public isDialogOpen: boolean = false;
  public isClosable: boolean = true;
  public header: string = '';
  public body: string = '';
  public buttons: DialogButton[] = [];
  public isLoading: boolean = false;

  public showDialog(header: string, body: string, buttons: DialogButton[]) {
    this.isClosable = true;
    this.isLoading = false;
    this.header = header;
    this.body = body;
    this.buttons = buttons;
    this.isDialogOpen = true;
  }

  public hideDialog() {
    this.header = '';
    this.body = '';
    this.buttons = [];
    this.isClosable = true;
    this.isDialogOpen = false;
  }

  public showLoadingDialog(header: string) {
    this.header = header;
    this.isLoading = true;
    this.isDialogOpen = true;
    this.isClosable = false;
  }
}
