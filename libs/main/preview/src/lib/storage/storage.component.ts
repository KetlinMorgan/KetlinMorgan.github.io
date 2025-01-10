import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-rare',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './storage.component.html',
  styleUrl: '../rare/rare.component.css',
})
export class StorageComponent {
  content=""
}
