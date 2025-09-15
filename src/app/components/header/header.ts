import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchQuery: string = '';
  cartItemCount: number = 0;
  categories = [
    { name: 'HOMBRE', slug: 'hombre' },
    { name: 'MUJER', slug: 'mujer' },
    { name: 'DEPORTIVOS', slug: 'deportivos' },
    { name: 'HODDIES Y SACOS', slug: 'hoodies-sacos' }
  ];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItemCount = items.length;
    });
  }

  onSearch() {
    if (this.searchQuery.trim()) {
      this.productService.searchProducts(this.searchQuery);
    }
  }
}
