// import { Routes } from '@angular/router';

// export const routes: Routes = [];


// import { Routes } from '@angular/router';
// import { BookingFormComponent } from './booking-form/booking-form.component';
// import { BookingSummaryComponent } from './booking-summary/booking-summary.component';

// export const routes: Routes = [
//     { path: '', component: BookingFormComponent },
//     { path: 'booking-summary', component: BookingSummaryComponent }
// ];

import { Routes } from '@angular/router';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { BookingSummaryComponent } from './booking-summary/booking-summary.component';

// export const routes: Routes = [
//     { path: '', redirectTo: 'booking-form', pathMatch: 'full' },
//     { path: 'booking-form', component: BookingFormComponent },
//     { path: 'booking-summary', component: BookingSummaryComponent },
// ];

export const routes: Routes = [
  { path: '', component: BookingFormComponent },
  { path: 'booking-summary', component: BookingSummaryComponent },
];