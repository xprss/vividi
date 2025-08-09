import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { LikeVibeDto, VibeService } from '@shared';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  constructor(
    private readonly vibeService: VibeService,
    private http: HttpClient
  ) {}

  public getAllVibes(): Observable<any> {
    return this.vibeService.vibeControllerFindAll().pipe();
  }

  public getVibe(vibeId: string): Observable<any> {
    return this.vibeService.vibeControllerFindOne(vibeId).pipe();
  }

  public postVibePicture(data: any): Observable<string> {
    const formData = new FormData();
    formData.append('file', data.file);
    return this.http
      .post(environment.apiBaseUrl + '/vibe/picture', formData, {
        responseType: 'text',
      })
      .pipe();
  }

  public postVibeMetadata(data: any, fileId: string): Observable<any> {
    return this.vibeService
      .vibeControllerCreate({
        userId: data.userId,
        userFullName: data.userFullName,
        description: data.description,
        fileId: fileId,
        moment: data.moment,
      })
      .pipe();
  }

  public async createAccount(
    firstName: string,
    lastName: string,
    email: string
  ): Promise<Response> {
    const body: any = {
      firstName: firstName,
      lastName: lastName,
      email: email,
    };

    const response: Response = await fetch(environment.apiBaseUrl + '/user/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return response;
  }

  public async getAccount(email: string): Promise<any> {
    const response = await fetch(environment.apiBaseUrl + '/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email }),
    });
    return response;
  }

  public deleteVibe(vibeId: string): Observable<any> {
    return this.vibeService.vibeControllerRemove(vibeId).pipe();
  }

  public async getHeartbeat(): Promise<any> {
    const response = await fetch(environment.apiBaseUrl + '/heartbeat', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  }

  public setLike(
    vibeId: string,
    userId: string,
    isLiked: boolean
  ): Observable<any> {
    const body: LikeVibeDto = {
      vibeId: vibeId,
      userId: userId,
      isLiked: isLiked,
    };
    return this.vibeService.vibeControllerSetLike(body).pipe();
  }
}
