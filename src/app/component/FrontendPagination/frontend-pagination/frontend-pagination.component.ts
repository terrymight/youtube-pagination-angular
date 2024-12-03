import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../../service/http/token.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frontend-pagination',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './frontend-pagination.component.html',
  styleUrl: './frontend-pagination.component.css'
})
export class FrontendPaginationComponent implements OnInit {

  list: any[] = []
  title: string = 'Frontend Pagination'

  constructor(
    private service: TokenService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loagtabledata()
  }

  loagtabledata(): void {
    this.service.getUsers()
      .subscribe({
        next: resp => {
          this.list = resp

        },
        error: err => { console.log(err) }
      })
  }

  goback() {
    this.router.navigate(['/'])
  }
}
