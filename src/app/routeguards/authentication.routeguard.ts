import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Observable,BehaviorSubject } from "rxjs";
import { ToasterService, Toast } from 'angular2-toaster/angular2-toaster';

@Injectable()
export class AuthenticationRouteGuard implements CanActivate{
  private isSignedIn: boolean;

  constructor(private authenticationService: AuthenticationService, private toasterService: ToasterService) {
    this.authenticationService.isSignedIn().subscribe(
       value => this.isSignedIn = value
    )
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.isSignedIn){
      return true;
    }

    var toast : Toast = {
    type: 'error',
    title: 'Route Disabled',
    body: 'You must sign in before you can access this route',
    showCloseButton: true,
    };
    this.toasterService.pop(toast);
    return false;
  }
}