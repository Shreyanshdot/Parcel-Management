import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';

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
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './booking-form.component.html',
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

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.bookingForm = this.fb.group({
      receiverName: ['', [Validators.required, Validators.minLength(3)]],
      receiverAddress: ['', Validators.required],
      receiverPin: ['', [Validators.required, Validators.pattern(/^[1-9][0-9]{5}$/)]],
      receiverMobile: ['', [Validators.required, Validators.pattern(/^[6-9][0-9]{9}$/)]],
      weight: ['', [Validators.required, Validators.min(1)]],
      contents: ['', [Validators.required, Validators.minLength(3)]],
      deliveryType: ['', Validators.required],
      packing: ['', Validators.required],
      pickupTime: ['', Validators.required],
      dropoffTime: ['', Validators.required]
    });

    this.bookingForm.get('weight')?.valueChanges.subscribe(() => this.calculateCost());
    this.bookingForm.get('deliveryType')?.valueChanges.subscribe(() => this.calculateCost());
    this.bookingForm.get('packing')?.valueChanges.subscribe(() => this.calculateCost());

    this.bookingForm.valueChanges
      .pipe(debounceTime(100)) // allow time for value update
      .subscribe(() => {
        this.calculateCost();
      });
  }

  calculateCost() {
    const data = this.bookingForm.value;

    if (!data.weight || !data.deliveryType || !data.packing) {
      this.totalCost = 0;
      return this.totalCost;
    }

    const baseRate = 50;
    const weightCharge = 0.02 * data.weight;
    const deliveryCharge = deliveryChargeMap[data.deliveryType as DeliveryType];
    const packingCharge = packingChargeMap[data.packing as PackingType];

    const taxRate = 0.05;
    const subtotal = baseRate + weightCharge + deliveryCharge + packingCharge;

    this.totalCost = Math.round(subtotal * (1 + taxRate));
    return this.totalCost;

  }

  submitForm() {
    if (this.bookingForm.valid) {
      const totalCost = this.calculateCost(); // Get latest cost

      const bookingId = 'BK' + Date.now();
      const paymentTime = new Date().toLocaleString();

      const bookingData = {
        bookingId,
        sender: this.user,
        ...this.bookingForm.value,
        totalCost,
        paymentTime
      };

      console.log('Navigating with data:', bookingData);

      this.router.navigate(['/booking-summary'], { state: { data: bookingData } });
    }
  }


}
