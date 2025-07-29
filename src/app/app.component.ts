import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // ✅ import your booking form here
  template: `<router-outlet></router-outlet>`, // ✅ dynamic route rendering
})
export class AppComponent { }
