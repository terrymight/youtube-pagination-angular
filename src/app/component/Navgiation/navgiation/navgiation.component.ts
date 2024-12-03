import { AfterContentInit, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navgiation',
  imports: [],
  standalone: true,
  templateUrl: './navgiation.component.html',
  styleUrl: './navgiation.component.css'
})
export class NavgiationComponent implements AfterContentInit {

  constructor(private router: Router) { }

  ngAfterContentInit(): void {

  }

  frontpagination(): void {
    this.router.navigate(['/frontend-pagination'])
  }

  backpagination(): void {
    this.router.navigate(['/backend-pagination'])
  }
}
