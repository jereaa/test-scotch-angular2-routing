import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about.component';
import { AboutSectionComponent } from './about-section.component';
import { AboutUserComponent } from '../about-user/about-user.component';

import { AboutResolveService } from './about-resolve.service';
import { AboutUserResolveService } from '../about-user/about-user-resolve.service';

const routes: Routes = [
    {
        path: '',
        component: AboutSectionComponent,
        children: [
            {
                path: '',
                component: AboutComponent,
                resolve: {
                    users: AboutResolveService
                }
            },
            {
                path: ':username',
                component: AboutUserComponent,
                resolve: {
                    user: AboutUserResolveService
                }
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AboutRoutingModule { }
