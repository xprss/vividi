import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { FirebaseApp, initializeApp } from '@firebase/app';
import { environment } from './environments/environment';

const firebaseApp: FirebaseApp = initializeApp({
  apiKey: environment.apiKey,
  authDomain: environment.authDomain,
  projectId: environment.projectId,
  storageBucket: environment.storageBucket,
  messagingSenderId: environment.messagingSenderId,
  appId: environment.appId,
});

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
