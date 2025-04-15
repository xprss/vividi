import { HttpClient } from '@angular/common/http';

export class BaseApiService {
  constructor(protected http: HttpClient, protected baseUrl: string) {}

  protected get<T>(url = '') {
    return this.http.get<T>(`${this.baseUrl}/${url}`);
  }

  protected post<T>(body: any, url = '') {
    return this.http.post<T>(`${this.baseUrl}/${url}`, body);
  }

  protected put<T>(body: any, url = '') {
    return this.http.put<T>(`${this.baseUrl}/${url}`, body);
  }

  protected delete<T>(url = '') {
    return this.http.delete<T>(`${this.baseUrl}/${url}`);
  }
}
