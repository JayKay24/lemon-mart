import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { AppMaterialModule } from '../app-material.module'
import { AuthGuard } from '../auth/auth-guard.service'
import { AuthService } from '../auth/auth.service'
import { ManagerHomeComponent } from './manager-home/manager-home.component'
import { ManagerRoutingModule } from './manager-routing.module'
import { ManagerComponent } from './manager.component'
import { ReceiptLookupComponent } from './receipt-lookup/receipt-lookup.component'
import { UserManagementComponent } from './user-management/user-management.component'

@NgModule({
  imports: [CommonModule, ManagerRoutingModule, AppMaterialModule],
  declarations: [
    ManagerHomeComponent,
    ManagerComponent,
    UserManagementComponent,
    ReceiptLookupComponent,
  ],
  providers: [AuthService, AuthGuard],
})
export class ManagerModule {}
