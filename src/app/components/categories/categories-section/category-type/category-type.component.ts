import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { categories } from '../../../../utils/category-list';

@Component({
  selector: 'app-category-type',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-type.component.html',
  styleUrls: ['./category-type.component.scss'],
})
export class CategoryTypeComponent {
  categoriesList: string[] = categories;

  constructor(private router: Router) {}

  navigateToCategory(category: string): void {
    this.router.navigate([], {
      queryParams: { category },
      queryParamsHandling: 'merge',
    });
  }
}
