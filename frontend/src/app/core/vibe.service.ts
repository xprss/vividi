import { Injectable } from '@angular/core';
import { BaseApiService } from './baseapi.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VibeService extends BaseApiService {
  private readonly api: string = 'vibe';

  constructor(http: HttpClient) {
    super(http, environment.apiBaseUrl);
  }

  public getAll() {
  }
}
