// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-booking-form',
//   imports: [],
//   templateUrl: './booking-form.component.html',
//   styleUrl: './booking-form.component.css'
// })
// export class BookingFormComponent {

// }


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; // ✅ Import this

type DeliveryType = 'Standard' | 'Express' | 'Same-Day';
type PackingType = 'Basic' | 'Premium';

const deliveryChargeMap: Record<DeliveryType, number> = {
  Standard: 30,
  Express: 80,
  'Same-Day': 150,
};

const packingChargeMap: Record<PackingType, number> = {
  Basic: 10,
  Premium: 30,
};


@Component({
  selector: 'app-booking-form',
  standalone: true, // ✅ must be standalone
  imports: [
    ReactiveFormsModule,
    CommonModule // ✅ Add here
  ], templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {
  bookingForm!: FormGroup;
  totalCost: number = 0;
  user = {
    name: 'Shreyansh Dawar',
    address: 'Indore, MP',
    contact: '9876543210',
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.bookingForm = this.fb.group({
      receiverName: ['', [Validators.required, Validators.minLength(3)]],
      receiverAddress: ['', Validators.required],
      receiverPin: ['', [Validators.required, Validators.pattern(/^[1-9][0-9]{5}$/)]],
      receiverMobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      weight: ['', [Validators.required, Validators.min(1)]],
      contents: ['', [Validators.required, Validators.minLength(3)]],
      deliveryType: ['', Validators.required],
      packing: ['', Validators.required],
      pickupTime: ['', Validators.required],
      dropoffTime: ['', Validators.required]
    });


    // this.bookingForm.valueChanges.subscribe(() => {
    //   this.calculateCost();
    // });

    this.bookingForm.get('weight')?.valueChanges.subscribe(() => this.calculateCost());
    this.bookingForm.get('deliveryType')?.valueChanges.subscribe(() => this.calculateCost());
    this.bookingForm.get('packing')?.valueChanges.subscribe(() => this.calculateCost());


  }

  calculateCost() {
    const data = this.bookingForm.value;

    // ✅ Only calculate if required fields are filled
    if (!data.weight || !data.deliveryType || !data.packing) {
      this.totalCost = 0;
      return;
    }

    const baseRate = 50;
    const weightCharge = 0.02 * data.weight;

    const deliveryType = data.deliveryType as DeliveryType;
    const deliveryCharge = deliveryChargeMap[deliveryType];

    const packingType = data.packing as PackingType;
    const packingCharge = packingChargeMap[packingType];

    const taxRate = 0.05;
    const subtotal = baseRate + weightCharge + deliveryCharge + packingCharge;

    this.totalCost = Math.round(subtotal * (1 + taxRate));
  }



  submitForm() {
    const bookingId = uuidv4();
    const paymentTime = new Date().toISOString();
    const details = {
      ...this.bookingForm.value,
      sender: this.user,
      cost: this.totalCost,
      bookingId,
      paymentTime
    };

    console.log('Booking Confirmed:', details);
    // Redirect to payment page or display booking summary
  }
}
function uuidv4() {
  throw new Error('Function not implemented.');
}

