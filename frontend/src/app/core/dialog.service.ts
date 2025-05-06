import { Injectable } from '@angular/core';
import { DialogButton } from '../../../libs/dialog-button.type';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor() { }

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


  public showLoadingDialog() {
    this.header = 'Caricamento in corso...';
    this.isLoading = true;
    this.isDialogOpen = true;
    this.isClosable = false;
  }
}
