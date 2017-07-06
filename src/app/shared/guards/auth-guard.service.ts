import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

    constructor() { }

    canActivate(): boolean {
        console.log('I am checking if you can log in');
        return true;
    }

    canActivateChild(): boolean {
        console.log('I am checking your child routes');
        return true;
    }

}
