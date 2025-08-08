import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { providePrimeNG } from 'primeng/config';
import { WeddingPreset } from './themes/Wedding';
import { provideHttpClient } from '@angular/common/http';
import { Configuration } from '@shared';
import { apiConfigurationFactory } from 'src/lib/apiConfigurationFactory';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    {
      provide: Configuration,
      useFactory: apiConfigurationFactory,
    },
    providePrimeNG({
      theme: {
        preset: WeddingPreset,
        options: {
          darkModeSelector: '.my-app-dark',
        },
      },
    }),
  ],
};
