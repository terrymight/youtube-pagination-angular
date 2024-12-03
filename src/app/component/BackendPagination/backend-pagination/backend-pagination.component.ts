import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../../service/http/token.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-backend-pagination',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './backend-pagination.component.html',
  styleUrl: './backend-pagination.component.css'
})
export class BackendPaginationComponent implements OnInit {

  list: any[] = []
  title: string = 'Backend Pagination'

  constructor(
    private service: TokenService,
    private router: Router,
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