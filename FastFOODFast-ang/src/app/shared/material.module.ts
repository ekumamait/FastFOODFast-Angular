import {
    MatFormFieldModule,
    MatAutocompleteModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
  } from '@angular/material';
  import { NgModule } from '@angular/core';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  
  @NgModule({
    imports: [
      BrowserAnimationsModule,
      MatFormFieldModule,
      MatInputModule,
      MatIconModule,
      MatAutocompleteModule,
      MatIconModule,
      MatInputModule,
      MatSnackBarModule,
    ],
    exports: [
      BrowserAnimationsModule,
      MatFormFieldModule,
      MatInputModule,
      MatIconModule,
      MatAutocompleteModule,
      MatIconModule,
      MatInputModule,
      MatSnackBarModule,
    ]
  })
  export class MaterialModule {}
  