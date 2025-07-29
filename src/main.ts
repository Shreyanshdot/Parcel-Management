import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { BookingFormComponent } from './app/booking-form/booking-form.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));


// bootstrapApplication(BookingFormComponent)
//   .catch((err) => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});
