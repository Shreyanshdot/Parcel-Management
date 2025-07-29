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
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [BookingFormComponent, RouterOutlet], // ✅ import your booking form here
  imports: [RouterModule], // ✅ import your booking form here
  template: `<router-outlet></router-outlet>`, // ✅ dynamic route rendering
})
export class AppComponent { }
