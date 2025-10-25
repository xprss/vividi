import { Component, OnInit } from '@angular/core';
import { IftaLabelModule } from 'primeng/iftalabel';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';
import { ChipModule } from 'primeng/chip';
import { ServerService } from '../../core/server.service';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../core/auth.service';
import { FileSelectEvent, FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { environment } from '../../../environments/environment';
import { DialogService } from '../../core/dialog.service';
import { NavbarService } from '../../core/navbar.service';
import { CtasService } from '../../core/ctas.service';
import { CtasComponent } from '../../shared/components/ctas/ctas.component';
import Moment from 'src/lib/moment.enum';
import { resolveMomentLabel } from 'src/lib/util';
import { VibeManagementService } from 'src/app/core/vibe.service';

@Component({
  selector: 'v2d-new-vibe-form',
  imports: [
    CommonModule,
    IftaLabelModule,
    FormsModule,
    InputTextModule,
    TextareaModule,
    FloatLabelModule,
    ChipModule,
    ButtonModule,
    FileUploadModule,
    ToastModule,
    CtasComponent,
  ],
  templateUrl: './new-vibe-form.component.html',
  styleUrl: './new-vibe-form.component.scss',
})
export class NewVibeFormComponent implements OnInit {
  protected user: string = '';
  protected description: string = '';
  protected selectedMoment: string = '';
  protected file: File | null = null;
  protected maxFileSize: number = environment.maxFileSize;

  constructor(
    private readonly serverService: ServerService,
    protected readonly authService: AuthService,
    protected readonly dialogService: DialogService,
    protected readonly navbarService: NavbarService,
    protected readonly ctasService: CtasService,
    protected readonly vibeManagementService: VibeManagementService
  ) {}

  public ngOnInit(): void {
    this.ctasService.showCtas([
      {
        label: 'Cancella tutto',
        icon: 'pi pi-eraser',
        severity: 'secondary',
        disabled: false,
        action: () => {
          this.reset();
        },
      },
      {
        label: 'Condividi la tua Vibe!',
        icon: 'pi pi-upload',
        severity: 'primary',
        disabled: false,
        action: () => {
          if (!this.isSubmitEnabled()) {
            this.dialogService.showDialog(
              '⚠️ Attenzione!',
              'Compila tutti i campi prima di inviare la tua Vibe!',
              [
                {
                  label: 'Chiudi',
                  icon: 'pi pi-times',
                  severity: 'primary',
                  action: () => {
                    this.dialogService.hideDialog();
                  },
                },
              ]
            );
          } else {
            this.postVibe();
          }
        },
      },
    ]);
  }

  public postVibe(): void {
    const body: any = {
      userId: this.authService.getUser()?.id,
      userFullName: (
        this.authService.getUser()?.firstName +
        ' ' +
        this.authService.getUser()?.lastName
      ).trim(),
      description: this.description,
      moment: this.selectedMoment,
      file: this.file,
    };

    this.dialogService.showLoadingDialog('Caricamento in corso...');

    this.serverService.postVibePicture(body).subscribe({
      next: (response) => {
        this.serverService.postVibeMetadata(body, response).subscribe({
          next: (response) => {
            this.description = '';
            this.selectedMoment = '';
            this.file = null;
            this.dialogService.showDialog(
              '🥳 Caricamento completato!',
              'La tua Vibe è stata caricata con successo! Ora puoi visualizzarla nella sezione Esplora!',
              [
                {
                  label: 'Crea una nuova Vibe',
                  icon: 'pi pi-times',
                  severity: 'secondary',
                  action: () => {
                    this.dialogService.hideDialog();
                    this.navbarService.navigateToNewVibePage();
                  },
                },
                {
                  label: 'Vai alla sezione Esplora',
                  icon: 'pi pi-times',
                  severity: 'primary',
                  action: () => {
                    this.dialogService.hideDialog();
                    this.vibeManagementService.invalidateCache();
                    this.navbarService.navigateToHomePage();
                  },
                },
              ],
              response.message
            );
          },
          error: (error) => {
            console.error(error);
            this.dialogService.showDialog(
              '🫣 Errore durante il caricamento',
              'Qualcosa è andato storto durante il caricamento della Vibe. Riprova più tardi.',
              [
                {
                  label: 'Torna alla sezione Esplora',
                  icon: 'pi pi-times',
                  severity: 'primary',
                  action: () => {
                    this.dialogService.hideDialog();
                    this.navbarService.navigateToHomePage();
                  },
                },
              ]
            );
          },
        });
      },
      error: (error) => {
        console.error(error);
        this.dialogService.showDialog(
          '🫣 Errore durante il caricamento',
          'Qualcosa è andato storto durante il caricamento della Vibe. Riprova più tardi.',
          [
            {
              label: 'Torna alla sezione Esplora',
              icon: 'pi pi-times',
              severity: 'primary',
              action: () => {
                this.dialogService.hideDialog();
                this.navbarService.navigateToHomePage();
              },
            },
          ]
        );
      },
    });
  }

  protected reset() {
    this.description = '';
    this.selectedMoment = '';
    this.file = null;
  }

  protected onUpload($event: FileSelectEvent) {
    this.file = $event.files[0];
  }

  protected onMomentChange(newMoment: string) {
    if (this.selectedMoment === newMoment) {
      this.selectedMoment = '';
      return;
    }
    this.selectedMoment = newMoment;
  }

  protected isSubmitEnabled() {
    return (
      this.description.length > 0 &&
      this.selectedMoment.length > 0 &&
      this.file !== null
    );
  }

  protected getMoments(): Moment.Moment[] {
    return Moment.Moments;
  }

  protected getLabel(moment: Moment.Moment): string | undefined {
    return resolveMomentLabel(moment);
  }

  protected getMomentLabel(moment: Moment.Moment): string | undefined {
    console.log(moment);
    
    return Moment.MomentLabels[moment];
  }
}
