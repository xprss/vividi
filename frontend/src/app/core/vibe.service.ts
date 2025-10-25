import { Injectable } from '@angular/core';
import { BaseApiService } from './baseapi.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root',
})
export class VibeManagementService extends BaseApiService {
  public vibes: any[] = [];

  constructor(http: HttpClient, private readonly serverService: ServerService) {
    super(http, environment.apiBaseUrl);
  }

  public fetchVibes(force: boolean = false): void {
    if (force) {
      this.vibes = [];
    }

    if (this.vibes.length === 0) {
      console.log('Fetching vibes from server...');
      this.serverService.getAllVibes().subscribe((response) => {
        this.vibes = response;
      });
    }
  }

  public invalidateCache(): void {
    this.vibes = [];
  }
}
