import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  constructor() {}

  async getAllVibes(): Promise<
    { user: string; description: string; moment: string }[]
  > {
    const response = await fetch('http://localhost:8000/vibe', {
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

  async postVibe(data: {
    user: string;
    description: string;
    moment: string;
  }): Promise<void> {
    const response = await fetch('http://localhost:8000/vibe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }
}
