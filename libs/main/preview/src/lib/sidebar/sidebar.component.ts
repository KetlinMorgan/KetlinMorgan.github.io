import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  private readonly router = inject(Router);

  get currentRoute() {
    return this.router.url;
  }
  routeContains(path:string) {
    return this.currentRoute.includes(path);
  }
  handleNavigate(parts: string[]) {
    console.log(parts);
    this.router.navigate(parts);
  }
}
