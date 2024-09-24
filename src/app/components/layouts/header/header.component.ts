import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { categories } from '../../../utils/category-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  categoriesList = categories;

  constructor(private router: Router) {}

  navigateToCategory(category: string): void {
    this.router.navigate(['/categories'], {
      queryParams: { category },
    });
  }
}
