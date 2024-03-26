import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), { provide: APP_SERVICE_CONFIG, useValue: APP_CONFIG, }]
};
