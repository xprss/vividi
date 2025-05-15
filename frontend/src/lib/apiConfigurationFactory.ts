// src/app/shared/api-config.ts
import { Configuration } from '@shared';
import { environment } from 'src/environments/environment';

export function apiConfigurationFactory(): Configuration {
  return new Configuration({
    basePath: environment.apiBaseUrl,
  });
}
