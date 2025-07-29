// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-cancel-booking',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule, RouterModule],
//   templateUrl: './cancel-booking.component.html',
//   styleUrls: ['./cancel-booking.component.css']
// })
// export class CancelBookingComponent {
//   cancelForm: FormGroup;
//   message: string = '';
//   isSuccess: boolean = false;

//   constructor(private fb: FormBuilder) {
//     this.cancelForm = this.fb.group({
//       bookingId: ['', Validators.required]
//     });

//   }

//   cancelBooking() {
//     const bookingId = this.cancelForm.value.bookingId;

//     // Mocked backend call simulation
//     const existingBooking = this.mockBookingCheck(bookingId);

//     if (existingBooking) {
//       // Soft cancel logic (update status to "cancelled")
//       this.message = `Booking cancelled successfully (Booking ID: ${bookingId})`;
//       this.isSuccess = true;
//     } else {
//       this.message = `Booking cancel failed, incorrect Booking ID`;
//       this.isSuccess = false;
//     }
//   }

//   mockBookingCheck(id: number): boolean {
//     // Simulating a check for Booking ID in DB
//     const fakeDB = [101, 102, 103]; // Existing bookings
//     return fakeDB.includes(Number(id));
//   }
// }

// Hard Coded Data to test Booking Cancellation
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cancel-booking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cancel-booking.component.html',
  styleUrls: ['./cancel-booking.component.css']
})
export class CancelBookingComponent {
  bookingId = '';
  message = '';
  success = false;

  // Hardcoded dummy booking for testing
  dummyBookings: any[] = [
    {
      bookingId: 'BK123456',
      status: 'booked',
      receiver: 'John Doe',
      totalCost: 500
    }
  ];

  cancelBooking() {
    const booking = this.dummyBookings.find(b => b.bookingId === this.bookingId);

    if (booking && booking.status === 'booked') {
      booking.status = 'cancelled';
      this.success = true;
      this.message = `Booking cancelled successfully: ${booking.bookingId}`;
    } else {
      this.success = false;
      this.message = `Booking cancel failed, incorrect Booking ID`;
    }
  }
}
