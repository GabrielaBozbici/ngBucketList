import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatDialogModule,
  MatInputModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
} from '@angular/material';


// export * from './typings/index';
// export * from './core';
// export * from './expansion';
// export * from './sort';
// export * from './button';
// export * from './button-toggle';
// export * from './card';
// export * from './checkbox';
// export * from './snack-bar';
// export * from './dialog';
// export * from './icon';
// export * from './slider';
// export * from './tabs';
// export * from './slide-toggle';
// export * from './sidenav';
// export * from './divider';
// export * from './toolbar';
// export * from './form-field';
// export * from './radio';
// export * from './menu';
// export * from './progress-spinner';
// export * from './tooltip';
// export * from './progress-bar';
// export * from './grid-list';
// export * from './select';
// export * from './list';
// export * from './stepper';
// export * from './chips';
// export * from './autocomplete';
// export * from './paginator';
// export * from './input';
// export * from './datepicker';
// export * from './table';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
  ],
  providers: [MatDialogModule, MatButtonModule],
})
export class MaterialModule { }
