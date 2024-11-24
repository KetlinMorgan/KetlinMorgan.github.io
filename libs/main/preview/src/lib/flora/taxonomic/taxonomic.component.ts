import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'lib-taxonomic',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './taxonomic.component.html',
  styleUrl: './taxonomic.component.css',
})
export class TaxonomicComponent {

  searchForm = new FormGroup({
    family: new FormControl(''),
    genus: new FormControl(''),
    species: new FormControl(''),
  });

  handleSubmit() {

  }
}
