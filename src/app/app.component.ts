// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'parcel-management';
// }


import { Component } from '@angular/core';
import { BookingFormComponent } from './booking-form/booking-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BookingFormComponent], // ✅ import your booking form here
  template: `<app-booking-form></app-booking-form>`,
})
export class AppComponent { }
