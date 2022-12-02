import { Component } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss'],
})
export class ModelsComponent {
  constructor(private breakpoint: BreakpointObserver) {}
  get isMobile(): boolean {
    return (
      this.breakpoint.isMatched(Breakpoints.Small) || this.breakpoint.isMatched(Breakpoints.XSmall)
      // this.breakpoint.isMatched(Breakpoints.Medium)
    );
  }
}
