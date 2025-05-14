import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { FirebaseApp, initializeApp } from '@firebase/app';
import { environment } from './environments/environment';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const firebaseApp: FirebaseApp = initializeApp({
  apiKey: environment.apiKey,
  authDomain: environment.authDomain,
  projectId: environment.projectId,
  storageBucket: environment.storageBucket,
  messagingSenderId: environment.messagingSenderId,
  appId: environment.appId,
});

bootstrapApplication(AppComponent, appConfig)
  .then((app) => {
    const config = new DocumentBuilder()
      .setTitle('V2D-API')
      .setDescription('API documentation')
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  })
  .catch((err) => console.error(err));
