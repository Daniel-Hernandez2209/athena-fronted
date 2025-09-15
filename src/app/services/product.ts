import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Product, ProductResponse, ProductSearchResponse } from '../models/product';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = `${environment.apiUrl}/products`;
  private searchResults = new BehaviorSubject<Product[]>([]);

  public searchResults$ = this.searchResults.asObservable();

  constructor(private http: HttpClient) {}

  // Obtener todos los productos con paginación y filtros
  getProducts(params: any = {}): Observable<ProductResponse> {
    let httpParams = new HttpParams();

    Object.keys(params).forEach(key => {
      if (params[key]) {
        httpParams = httpParams.set(key, params[key].toString());
      }
    });

    return this.http.get<ProductResponse>(this.apiUrl, { params: httpParams });
  }

  // Productos por categoría (HOMBRE, MUJER, DEPORTIVOS, etc.)
  getProductsByCategory(category: string, page: number = 1): Observable<ProductResponse> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', '12');

    return this.http.get<ProductResponse>(`${this.apiUrl}/category/${category}`, { params });
  }

  // Productos destacados para la página principal
  getFeaturedProducts(limit: number = 8): Observable<Product[]> {
    return this.http.get<{ success: boolean, data: Product[] }>
      (`${this.apiUrl}/featured?limit=${limit}`)
      .pipe(
        map(response => response.data),
        catchError(error => {
          console.error('Error obteniendo productos destacados:', error);
          return [];
        })
      );
  }

  // Búsqueda de productos
  searchProducts(query: string, category?: string): Observable<Product[]> {
    let params = new HttpParams().set('q', query);

    if (category) {
      params = params.set('category', category);
    }

    return this.http.get<ProductSearchResponse>(`${this.apiUrl}/search`, { params })
      .pipe(
        map(response => {
          this.searchResults.next(response.data);
          return response.data;
        }),
        catchError(error => {
          console.error('Error en búsqueda:', error);
          this.searchResults.next([]);
          return [];
        })
      );
  }

  // Detalle de producto por slug
  getProductBySlug(slug: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${slug}`);
  }

  // Limpiar resultados de búsqueda
  clearSearchResults(): void {
    this.searchResults.next([]);
  }
}
