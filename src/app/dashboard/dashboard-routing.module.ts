import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from '../shared/guards/auth-guard.service';
import { CanDeactivateGuardService } from '../shared/guards/can-deactivate-guard.service';

import { DashboardComponent } from './dashboard.component';
import { DashboardUsersComponent } from './users/dashboard-users.component';
import { DashboardUsersHomeComponent } from './users/dashboard-users-home/dashboard-users-home.component';
import { DashboardUserDetailsComponent } from './users/dashboard-user-details/dashboard-user-details.component';

const dashboardRoutes: Routes = [ {
    path: 'dashboard',
    children: [
        {
            path: '',
            component: DashboardComponent,
            canActivate: [ AuthGuardService ]
        },
        {
            path: 'users',
            component: DashboardUsersComponent,
            canActivateChild: [ AuthGuardService ],
            children: [
                { path: '', component: DashboardUsersHomeComponent },
                {
                    path: ':username',
                    component: DashboardUserDetailsComponent,
                    canDeactivate: [ CanDeactivateGuardService ]
                }
            ]
        }
    ]
}]

@NgModule({
    imports: [ RouterModule.forChild(dashboardRoutes) ],
    exports: [ RouterModule ]
})
export class DashboardRoutingModule { }
