import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
declare var $:any; // For JQuery
/**
 * Provides signin method to signin & signup components.
 */
export class Signin {

    model: any = {};

    errorMessage: string = "";
    registerErrorMessage: string = "";

    constructor(public router: Router, public authenticationService: AuthenticationService) { 
        this.authenticationService.userSubject.subscribe((value) => {
            this.model.currentUser = value.firstname;
            this.model.isSignedIn = true;
            console.log("Subscription got", value); 
        });
    }

    registerUser(): void {

    }

    signOut(): void {
        this.authenticationService.signout();
        this.errorMessage = "";
        this.registerErrorMessage = "";
        this.model.isSignedIn = false;        
        this.model.currentUser = "";
        this.router.navigate(['home']);
    }

    signin(): void {
        this.authenticationService.signin(this.model.username, this.model.password)
            .subscribe(
            () => {

                this.model.isSignedIn = true;

                $('#signInModal').modal('hide');
            },
            (error: any) => {
                this.model.isSignedIn = false;
                // Checks for error in response (error from the Token endpoint).
                if (error.body != "") {
                    let body: any = error.json();

                    switch (body.error) {
                        case "invalid_grant":
                            this.errorMessage = "Invalid email or password";
                            break;
                        default:
                            this.errorMessage = "Unexpected error. Try again";
                    }
                } else {
                    this.model.isSignedIn = false;
                    let errMsg = (error.message) ? error.message :
                        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
                    console.log(errMsg);
                    this.errorMessage = "Server error. Try later.";
                }
            });
    }

}
