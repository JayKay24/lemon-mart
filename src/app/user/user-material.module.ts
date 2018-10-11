import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import {
  MatAutocompleteModule,
  MatDatepickerModule,
  MatDividerModule,
  MatLineModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  MatStepperModule,
} from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatDividerModule,
    MatLineModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatStepperModule,
  ],
  exports: [
    CommonModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatDividerModule,
    MatLineModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatStepperModule,
  ],
})
export class UserMaterialModule {}
