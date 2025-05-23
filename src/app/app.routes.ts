import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { FreeQuotesComponent } from './components/free-quotes/free-quotes.component';

export const routes: Routes = [
  { path: '', component: ServicesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactusComponent },
  { path: 'quote', component: FreeQuotesComponent },
  { path: '**', redirectTo: '' },
];
