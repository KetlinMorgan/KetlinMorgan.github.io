import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'lib-rare',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './rare.component.html',
  styleUrl: './rare.component.css',
})
export class RareComponent {
  searchForm = new FormGroup({
    family: new FormControl(''),
    genus: new FormControl(''),
    species: new FormControl(''),
  });

  handleSubmit() {
    alert("не искали и не нашли")
  }
}
