import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, 
        MatToolbarModule, 
        MatDialogModule, 
        MatInputModule, 
        MatDatepickerModule, 
        MatNativeDateModule,
        MatSelectModule,
        MatTabsModule
    } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, 
            MatToolbarModule,
            MatDialogModule,
            MatInputModule,
            MatDatepickerModule, 
            MatNativeDateModule,
            MatSelectModule,
            MatTabsModule],

  exports: [MatButtonModule, 
            MatToolbarModule,
            MatDialogModule,
            MatInputModule,
            MatDatepickerModule, 
            MatNativeDateModule,
            MatSelectModule,
            MatTabsModule],
})
export class MaterialModule { }