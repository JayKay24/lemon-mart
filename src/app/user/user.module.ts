import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppMaterialModule } from '../app-material.module'
import { LogoutComponent } from './logout/logout.component'
import { ProfileComponent } from './profile/profile.component'
import { UserMaterialModule } from './user-material.module'
import { UserRoutingModule } from './user-routing.module';
import { ViewUserComponent } from './view-user/view-user.component'

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    UserMaterialModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  declarations: [ProfileComponent, LogoutComponent, ViewUserComponent],
})
export class UserModule {}
