import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { AppMaterialModule } from '../app-material.module'
import { AuthGuard } from '../auth/auth-guard.service'
import { AuthService } from '../auth/auth.service'
import { SharedComponentsModule } from '../shared-components.module'
import { UserResolve } from '../user/user/user.resolve'
import { ManagerHomeComponent } from './manager-home/manager-home.component'
import { ManagerRoutingModule } from './manager-routing.module'
import { ManagerComponent } from './manager.component'
import { ReceiptLookupComponent } from './receipt-lookup/receipt-lookup.component'
import { UserManagementComponent } from './user-management/user-management.component'
import { UserTableComponent } from './user-table/user-table.component'

@NgModule({
  imports: [
    CommonModule,
    ManagerRoutingModule,
    AppMaterialModule,
    SharedComponentsModule,
  ],
  declarations: [
    ManagerHomeComponent,
    ManagerComponent,
    UserManagementComponent,
    ReceiptLookupComponent,
    UserTableComponent,
  ],
  providers: [AuthService, AuthGuard, UserResolve],
})
export class ManagerModule {}
