import { NgModule } from '@angular/core';
import {
  HeaderContentDirective,
  MainContentDirective,
} from './directives/layout-content.directive';

@NgModule({
  declarations: [
    HeaderContentDirective,
    MainContentDirective,
  ],
  providers: [],
  exports: [
    HeaderContentDirective,
    MainContentDirective,
  ],
})
export class SharedCommonModule {}
