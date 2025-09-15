import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';

export interface CartItem {
  product: Product;
  size: string;
  quantity: number;
  subtotal: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly CART_STORAGE_KEY = 'athena_cart';

  private cartItems = new BehaviorSubject<CartItem[]>(this.getCartFromStorage());
  public cartItems$ = this.cartItems.asObservable();

  private cartTotal = new BehaviorSubject<number>(0);
  public cartTotal$ = this.cartTotal.asObservable();

  constructor() {
    // Calcular total inicial
    this.updateCartTotal();
  }

  // Agregar producto al carrito
  addToCart(product: Product, size: string = 'M', quantity: number = 1): void {
    const currentItems = this.cartItems.value;
    const existingItemIndex = currentItems.findIndex(item =>
      item.product._id === product._id && item.size === size
    );

    const effectivePrice = product.discountPrice || product.price;

    if (existingItemIndex > -1) {
      // Actualizar cantidad del producto existente
      currentItems[existingItemIndex].quantity += quantity;
      currentItems[existingItemIndex].subtotal =
        currentItems[existingItemIndex].quantity * effectivePrice;
    } else {
      // Agregar nuevo producto
      currentItems.push({
        product,
        size,
        quantity,
        subtotal: effectivePrice * quantity
      });
    }

    this.updateCart(currentItems);

    // Mostrar notificación (opcional)
    this.showAddToCartNotification(product.name);
  }

  // Remover producto del carrito
  removeFromCart(productId: string, size: string): void {
    const currentItems = this.cartItems.value;
    const updatedItems = currentItems.filter(item =>
      !(item.product._id === productId && item.size === size)
    );

    this.updateCart(updatedItems);
  }

  // Actualizar cantidad de un producto
  updateQuantity(productId: string, size: string, quantity: number): void {
    const currentItems = this.cartItems.value;
    const itemIndex = currentItems.findIndex(item =>
      item.product._id === productId && item.size === size
    );

    if (itemIndex > -1) {
      if (quantity <= 0) {
        this.removeFromCart(productId, size);
      } else {
        const effectivePrice = currentItems[itemIndex].product.discountPrice ||
                              currentItems[itemIndex].product.price;
        currentItems[itemIndex].quantity = quantity;
        currentItems[itemIndex].subtotal = quantity * effectivePrice;
        this.updateCart(currentItems);
      }
    }
  }

  // Limpiar carrito
  clearCart(): void {
    this.updateCart([]);
  }

  // Obtener total del carrito
  getCartTotal(): number {
    return this.cartItems.value.reduce((total, item) => total + item.subtotal, 0);
  }

  // Obtener cantidad total de items
  getCartItemCount(): number {
    return this.cartItems.value.reduce((total, item) => total + item.quantity, 0);
  }

  // Métodos privados
  private updateCart(items: CartItem[]): void {
    this.cartItems.next(items);
    this.updateCartTotal();
    this.saveCartToStorage(items);
  }

  private updateCartTotal(): void {
    const total = this.getCartTotal();
    this.cartTotal.next(total);
  }

  private saveCartToStorage(items: CartItem[]): void {
    localStorage.setItem(this.CART_STORAGE_KEY, JSON.stringify(items));
  }

  private getCartFromStorage(): CartItem[] {
    try {
      const stored = localStorage.getItem(this.CART_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error loading cart from storage:', error);
      return [];
    }
  }

  private showAddToCartNotification(productName: string): void {
    // Implementar notificación toast o similar
    console.log(`${productName} agregado al carrito`);
  }
}
