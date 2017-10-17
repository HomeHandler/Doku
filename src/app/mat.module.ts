import { NgModule } from '@angular/core';
import {
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule,
    MatFormFieldModule, MatInputModule, MatSelectModule,
    MatDatepickerModule, MatNativeDateModule,
    MatChipsModule,
    MatIconModule
} from '@angular/material';

const usedMaterialModules = [
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule,
    MatInputModule, MatSelectModule,
    MatDatepickerModule, MatNativeDateModule,
    MatChipsModule,
    MatIconModule
];

@NgModule({
    imports: usedMaterialModules,
    exports: usedMaterialModules,
})
export class MatModule { }
