import { Directive } from '@angular/core';


@Directive({
  selector: '[libHeaderContent]',
})
export class HeaderContentDirective {}

@Directive({
  selector: '[libMainContent]',
})
export class MainContentDirective {}
