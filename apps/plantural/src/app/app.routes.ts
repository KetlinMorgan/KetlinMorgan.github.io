import { Route } from '@angular/router';
import { MainComponent } from './main/main.component';
import {
  FloraComponent,
  RareComponent,
  HerbariumComponent,
  LinksComponent,
  TaxonomicComponent,
  CytogeneticComponent,
  PhylogeneticComponent,
  StorageComponent,
} from '@plantural/main/preview';

export const appRoutes: Route[] = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'flora', pathMatch: 'full' },
      {
        path: 'flora',
        component: FloraComponent,
      },
      {
        path: 'flora/taxonomic-diversity',
        component: TaxonomicComponent,
      },
      {
        path: 'flora/cytogenetic-diversity',
        component: CytogeneticComponent,
      },
      {
        path: 'flora/phylogenetic-diversity',
        component: PhylogeneticComponent,
      },
      {
        path: 'rare',
        component: RareComponent,
      },
      {
        path: 'herbarium',
        component: HerbariumComponent,
      },
      {
        path: 'links',
        component: LinksComponent,
      },
      {
        path: 'storage',
        component: StorageComponent,
      },
    ],
  },

  {
    path: '**',
    redirectTo: 'main',
  },
];
