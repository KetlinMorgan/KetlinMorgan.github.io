import { Component } from '@angular/core';
import { BaseLayoutComponent, SharedCommonModule } from '@plantural/shared/common';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-main',
  styleUrls: ['./main.component.css'],
  templateUrl: './main.component.html',
  imports: [BaseLayoutComponent, RouterOutlet, SharedCommonModule],
})
export class MainComponent {}
