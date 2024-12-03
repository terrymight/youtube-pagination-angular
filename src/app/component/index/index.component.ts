import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TokenService } from '../../service/http/token.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
  standalone: true,
  providers: []
})

export class IndexComponent {


}
