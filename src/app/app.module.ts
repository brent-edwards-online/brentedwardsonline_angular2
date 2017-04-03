import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { TechComponent } from './tech/tech.component';
import { FitnessComponent } from './fitness/fitness.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';

import { routes } from './app.router';

import { TechFilterPipe } from './pipes/techfilter.pipe';
import { WorkFilterPipe } from './pipes/workfilter.pipe';

import { AuthenticationService } from './service/authentication.service';
import { IdentityService } from './service/identity.service';

// angular2-jwt config for JiT and AoT compilation.
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { Http } from '@angular/http';

import { LocalStorage } from "angular2-localstorage/WebStorage";

import { AuthenticationRouteGuard } from './routeguards/authentication.routeguard'

import { ToasterModule, ToasterService} from 'angular2-toaster';
import { LoaderComponent } from './loader/loader.component';
import { BlogComponent } from './blog/blog.component';
import { QualificationsComponent } from './qualifications/qualifications.component';
import { CarouselComponent } from './carousel/carousel.component';
import { QualificationComponent } from './qualification/qualification.component';

// Set tokenGetter to use the same storage in AuthenticationService.Helpers.
export function getAuthHttp(http: Http) {
    return new AuthHttp(new AuthConfig({
        noJwtError: false,
        tokenGetter: (() => localStorage.getItem('id_token'))
    }), http);
}

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    NavigationComponent,
    FooterComponent,
    TechComponent,
    FitnessComponent,
    AboutComponent,
    HomeComponent,
    WorkComponent,
    TechFilterPipe,
    WorkFilterPipe,
    LoaderComponent,
    BlogComponent,
    QualificationsComponent,
    CarouselComponent,
    QualificationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    ToasterModule
  ],
  providers: [
        AuthenticationService,
        AuthenticationRouteGuard,
        ToasterService,
        IdentityService,
        {
            provide: AuthHttp,
            useFactory: getAuthHttp,
            deps: [Http]
        }
    ],
  bootstrap: [AppComponent]
})


export class AppModule { }
