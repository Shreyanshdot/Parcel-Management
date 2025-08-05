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
