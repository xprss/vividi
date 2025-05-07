import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  constructor() {}

  public async getAllVibes(): Promise<
    { user: string; description: string; moment: string }[]
  > {
    const response = await fetch(environment.apiBaseUrl + '/vibe/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(async (response: Response) => {
      if (response.ok) {
        const vibe = await response.json();
        return vibe;
      }
    });

    return response;
  }

  public async postVibe(data: any): Promise<any> {
    const formData = new FormData();
    formData.append('file', data.file);
    formData.append('userId', data.userId);
    formData.append('userFullName', data.userFullName);
    formData.append('description', data.description);
    formData.append('moment', data.moment);
    const response = await fetch(environment.apiBaseUrl + '/vibe/', {
      method: 'POST',
      body: formData,
    });
    return response.json();
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
      body: JSON.stringify({email: email})
    });
    return response;
  }

  public async deleteVibe(vibeId: string): Promise<void> {
    const response = await fetch(environment.apiBaseUrl + '/vibe/' + vibeId, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
