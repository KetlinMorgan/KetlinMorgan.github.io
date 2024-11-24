import { Component } from '@angular/core';
import { BaseLayoutComponent, SharedCommonModule } from '@plantural/shared/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "../../../../../libs/main/preview/src/lib/sidebar/sidebar.component";

@Component({
  standalone: true,
  selector: 'app-main',
  styleUrls: ['./main.component.css'],
  templateUrl: './main.component.html',
  imports: [BaseLayoutComponent, RouterOutlet, SharedCommonModule, SidebarComponent],
})
export class MainComponent {}
