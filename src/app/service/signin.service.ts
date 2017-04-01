import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
declare var $:any; // For JQuery
/**
 * Provides signin method to signin & signup components.
 */
export class Signin {

    model: any = {};

    errorMessage: string = "";
    registerErrors: string[] = [];

    constructor(public router: Router, public authenticationService: AuthenticationService) { 
        this.authenticationService.userSubject.subscribe((value) => {
            this.model.currentUser = value.firstname;
            this.model.isSignedIn = true;
            console.log("Subscription got", value); 
        });
    }

    registeruser(): void {
        this.model.isloading = true;
        this.registerErrors = [];    
        this.model.registerSuccess = false;
        this.model.registeredFirstname = "";

        this.authenticationService.registeruser(
            this.model.firstname,
            this.model.lastname,
            this.model.registerEmail,
            this.model.registerPassword,
            this.model.confirmPassword    
        )
        .subscribe(
            () => {
                //Register success
                console.log("Registration Success");
                this.model.isloading = undefined;
                $('#registerModal').modal('hide');
                this.model.registeredFirstname = this.model.firstname;
                this.model.username = this.model.registerEmail;
                this.model.password = this.model.registerPassword;
                this.model.registerSuccess = true;

                $('#signInModal').modal('show');
                this.model.firstname = undefined;
                this.model.lastname = undefined;
                this.model.registerEmail = undefined;
                this.model.registerPassword = undefined;
                this.model.confirmPassword = undefined;
            },
            (error: any) => {
                this.model.isloading = undefined;
                // Checks for error in response (error from the Token endpoint).
                if (error._body != "") {
                    let body: any = error.json();
                    body.errorList.forEach(element => {
                        this.registerErrors.push(element);
                    });
                    
                } else {
                    let errMsg = (error.message) ? error.message :
                        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
                    console.log(errMsg);
                    this.registerErrors.push("Server error. Try again later.");
                }
            });
    }

    signin(): void {
        this.model.isloading = true;
        this.authenticationService.signin(this.model.username, this.model.password)
            .subscribe(
            () => {
                //Sign in success
                this.model.registeredFirstname = "";
                this.model.registerSuccess == false;
                this.model.isloading = undefined;

                this.model.isSignedIn = true;
                $('#signInModal').modal('hide');
                this.model.username = undefined;
                this.model.password = undefined;
            },
            (error: any) => {
                this.model.isSignedIn = false;
                this.model.isloading = undefined;
                // Checks for error in response (error from the Token endpoint).
                if (error._body != "") {
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
                    this.errorMessage = "Server error. Try again later.";
                }
            });
    }

    
    signOut(): void {
        this.authenticationService.signout();
        this.errorMessage = "";
        this.registerErrors = [];
        this.model.isSignedIn = false;        
        this.model.currentUser = "";
        this.router.navigate(['home']);
    }

    signInAsGuest(): void {
        this.model.username = "guest@brentedwardsonline.com";
        this.model.password = "Gu3st2@17"
        this.signin();
    }
}
