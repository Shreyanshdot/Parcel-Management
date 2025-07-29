import { Routes } from '@angular/router';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { BookingSummaryComponent } from './booking-summary/booking-summary.component';
import { CancelBookingComponent } from './cancel-booking/cancel-booking.component';


export const routes: Routes = [
  { path: '', component: BookingFormComponent },
  { path: 'booking-summary', component: BookingSummaryComponent },
  { path: 'cancel-booking', component: CancelBookingComponent }
];