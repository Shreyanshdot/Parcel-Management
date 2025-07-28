import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { BookingFormComponent } from './app/booking-form/booking-form.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


// bootstrapApplication(BookingFormComponent)
//   .catch((err) => console.error(err));
