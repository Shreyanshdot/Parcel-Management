

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-booking-summary',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './booking-summary.component.html',
//   styleUrls: ['./booking-summary.component.css']
// })
// export class BookingSummaryComponent {
//   bookingData: any;

//   constructor(private router: Router) {
//     const nav = this.router.getCurrentNavigation();
//     this.bookingData = nav?.extras?.state?.['bookingData'];
//   }

//   // ✅ Getter to return current time (fallback if needed)
//   get formattedDate(): string {
//     return new Date().toLocaleString();
//   }
// }


// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { JsonPipe } from '@angular/common';

// @Component({
//   selector: 'app-booking-summary',
//   standalone: true,
//   imports : [JsonPipe],
//   template: `
//     <h2>Booking Summary</h2>
//     <pre>{{ data | json }}</pre>
//   `,
// })
// export class BookingSummaryComponent {
//   data: any;

//   constructor(private router: Router) {
//     const navigation = this.router.getCurrentNavigation();
//     this.data = navigation?.extras?.state;
//     console.log('Received in summary page:', this.data);
//   }
// }


import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-booking-summary',
  standalone: true,
  imports: [NgIf],
  templateUrl: './booking-summary.component.html',
  styleUrls: ['./booking-summary.component.css']
})
export class BookingSummaryComponent {
  bookingData: any;
  formattedDate: string;

  constructor(public router: Router) {
    const nav = this.router.getCurrentNavigation();
    const received = nav?.extras?.state;
    this.bookingData = received?.['data'];
    this.formattedDate = new Date().toLocaleString(); // fallback
    console.log('Final Summary Data:', this.bookingData);
  }
}

