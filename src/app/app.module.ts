import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { DashboardModule } from './dashboard/dashboard.module';

import { AppRoutingModule } from './app-routing.module';

import { AuthGuardService } from './shared/guards/auth-guard.service';
import { CanDeactivateGuardService } from './shared/guards/can-deactivate-guard.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ContactComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        DashboardModule,
        AppRoutingModule
    ],
    providers: [
        AuthGuardService,
        CanDeactivateGuardService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
