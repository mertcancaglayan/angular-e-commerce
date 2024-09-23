import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-type',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-type.component.html',
  styleUrl: './category-type.component.scss',
})
export class CategoryTypeComponent {
  categories: string[] = [
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing",
  ];

  constructor(private router: Router) {}

  navigateToCategory(category: string): void {
    this.router.navigate([], {
      queryParams: { category },
      queryParamsHandling: 'merge',
    });
  }
}
