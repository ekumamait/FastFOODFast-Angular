import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../../shared/material.module';
import { ToastrModule } from 'ng6-toastr-notifications';

export const getSharedComponentImports = () => {
    return [
      ReactiveFormsModule,
      FormsModule,
      HttpClientTestingModule,
      MaterialModule,
      ToastrModule.forRoot(),
    ];
  };