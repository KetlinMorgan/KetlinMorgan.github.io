import { Route } from '@angular/router';
import { MainComponent } from './main/main.component';
import {MainPreviewComponent} from '@plantural/main/preview';

export const appRoutes: Route[] = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'preview', pathMatch: 'full' },
      {
        path: 'preview',
        component: MainPreviewComponent,
      },
    ]
  },

  {
    path: '**',
    redirectTo: 'main',
  },
];
