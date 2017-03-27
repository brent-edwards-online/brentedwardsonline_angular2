import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FitnessComponent } from './fitness/fitness.component';
import { TechComponent } from './tech/tech.component';
import { CvComponent } from './cv/cv.component';
import { WorkComponent } from './work/work.component';

import { AuthenticationRouteGuard } from './routeguards/authentication.routeguard';

export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'fitness', component: FitnessComponent, canActivate: [AuthenticationRouteGuard] },
    { path: 'tech', component: TechComponent, canActivate: [AuthenticationRouteGuard] },
    { path: 'work', component: WorkComponent, canActivate: [AuthenticationRouteGuard] }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);

