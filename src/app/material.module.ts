import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatButtonModule, MatIconModule, MatToolbarModule } from '@angular/material'

@NgModule({
  imports: [CommonModule, MatButtonModule, MatToolbarModule, MatIconModule],
  exports: [MatButtonModule, MatToolbarModule, MatIconModule],
  declarations: [],
})
export class MaterialModule {}
