import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { UserService } from '../shared/services/user.service';

import { DashboardComponent } from './dashboard.component';
import { DashboardUsersComponent } from './users/dashboard-users.component';
import { DashboardUsersHomeComponent } from './users/dashboard-users-home/dashboard-users-home.component';
import { DashboardUserDetailsComponent } from './users/dashboard-user-details/dashboard-user-details.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DashboardRoutingModule
    ],
    declarations: [
        DashboardComponent,
        DashboardUsersComponent,
        DashboardUsersHomeComponent,
        DashboardUserDetailsComponent ],
    providers: [
        UserService
    ]
})
export class DashboardModule { }
