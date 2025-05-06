import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  constructor() {}

  async getAllVibes(): Promise<
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

  async postVibe(data: any): Promise<any> {
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

  async deleteVibe(vibeId: string): Promise<void> {
    const response = await fetch(environment.apiBaseUrl + '/vibe/' + vibeId, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
