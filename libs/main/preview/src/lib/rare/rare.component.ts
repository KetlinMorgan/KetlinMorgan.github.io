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
    let addr;
    addr="/storage/"
      +this.searchForm.value.family+"-"
      +this.searchForm.value.genus+"-"
      +this.searchForm.value.species+".html";
    //TODO: clean & encode
    fetch(addr)
      .then(response => {
        // When the page is loaded convert it to text
        return response.text()
      })
      .then(html => {
        // @ts-ignore
        document.getElementById('search-result').innerHTML = html
      })
      .catch(error => {
        console.error('Failed to fetch page: ', error)
      })
  }
}
