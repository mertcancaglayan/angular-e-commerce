import { Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'shop', component: HomeComponent },
  { path: 'features', component: HomeComponent },
  { path: '**', component: HomeComponent },
];

// export const routes: Routes = [
//     { path: '', redirectTo: '/home', pathMatch: 'full' }, // Varsayılan rota
//     { path: 'home', component: HomeComponent },
//     { path: 'contact', component: ContactComponent },
//     { path: 'shop', component: ShopComponent },
//     { path: 'features', component: FeaturesComponent },
//     { path: '**', component: PageNotFoundComponent } // 404 sayfası için örnek
// ];
