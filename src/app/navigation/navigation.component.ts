import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { Signin } from '../service/signin';

declare var $:any; // For JQuery

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent extends Signin implements OnInit {
  
    constructor(public router: Router, public authenticationService: AuthenticationService) {
        super(router, authenticationService);

        // Preloads data for live example.
        this.model.username = "";
        this.model.password = "";
        this.model.isSignedIn = false;
    }

    ngOnInit() {

    }
}

