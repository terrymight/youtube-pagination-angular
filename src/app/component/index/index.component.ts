import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TokenService } from '../../service/http/token.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
  standalone: true,
  providers: []
})

export class IndexComponent implements OnInit {
  title = 'pagination';
  list: any[] = []
  constructor(private service: TokenService) { }

  ngOnInit(): void {
    this.service.getUsers()
      .subscribe({
        next: resp => {
          this.list = resp

        },
        error: err => { console.log(err) }
      })
  }
}
