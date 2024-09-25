import { Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SingleProductPageComponent } from './components/single-product-page/single-product-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'product/:id', component: SingleProductPageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: '**', component: HomeComponent },
];

// export const routes: Routes = [
//     { path: '', redirectTo: '/home', pathMatch: 'full' }, // Varsayılan rota
//     { path: 'home', component: HomeComponent },
//     { path: 'contact', component: ContactComponent },
//     { path: 'features', component: FeaturesComponent },
//     { path: '**', component: PageNotFoundComponent } // 404 sayfası için örnek
// ];
