

// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { NgIf } from '@angular/common';

// @Component({
//   selector: 'app-booking-summary',
//   standalone: true,
//   imports: [NgIf],
//   templateUrl: './booking-summary.component.html',
//   styleUrls: ['./booking-summary.component.css']
// })
// export class BookingSummaryComponent {
//   bookingData: any;
//   formattedDate: string;

//   constructor(public router: Router) {
//     const nav = this.router.getCurrentNavigation();
//     const received = nav?.extras?.state;
//     this.bookingData = received?.['data'];
//     this.formattedDate = new Date().toLocaleString(); // fallback
//     console.log('Final Summary Data:', this.bookingData);
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
  formattedDate: string = new Date().toLocaleString();

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    const received = nav?.extras?.state;
    this.bookingData = received?.['data'];
    console.log('Final Summary Data:', this.bookingData);
  }

  goToPayment(): void {
    // Navigate to payment route with Booking ID
    if (this.bookingData?.bookingId) {
      this.router.navigate(['/payment'], { state: { data: this.bookingData } });
    }
  }

  goHome(): void {
    this.router.navigate(['/home']);
  }
}
