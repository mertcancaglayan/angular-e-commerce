import { Component } from '@angular/core';
import { HeaderComponent } from "../layouts/header/header.component";
import { BannerComponent } from "./banner/banner.component";
import { BestSellingSectionComponent } from "./best-selling-section/best-selling-section.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, BannerComponent, BestSellingSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
