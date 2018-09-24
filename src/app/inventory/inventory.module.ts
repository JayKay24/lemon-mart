import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MaterialModule } from '../material.module'
import { InventoryRoutingModule } from './inventory-routing.module'
import { InventoryComponent } from './inventory.component'
import { InventoryHomeComponent } from './inventory-home/inventory-home.component'
import { StockEntryComponent } from './stock-entry/stock-entry.component'
import { ProductsComponent } from './products/products.component'
import { CategoriesComponent } from './categories/categories.component'

@NgModule({
  imports: [CommonModule, InventoryRoutingModule, MaterialModule],
  declarations: [
    InventoryComponent,
    InventoryHomeComponent,
    StockEntryComponent,
    ProductsComponent,
    CategoriesComponent,
  ],
})
export class InventoryModule {}
