export interface Product {
  _id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  discountPrice?: number;
  images: ProductImage[];
  category: ProductCategory;
  subcategory?: string;
  sizes: ProductSize[];
  colors: ProductColor[];
  sku: string;
  tags: string[];
  material?: string;
  careInstructions?: string;
  metaTitle?: string;
  metaDescription?: string;
  isActive: boolean;
  isFeatured: boolean;
  views: number;
  sales: number;
  rating: ProductRating;
  createdAt: string;
  updatedAt: string;
  // Virtuales del backend
  effectivePrice?: number;
  totalStock?: number;
  hasDiscount?: boolean;
}

export interface ProductImage {
  url: string;
  alt?: string;
  isPrimary?: boolean;
}

export interface ProductSize {
  size: string;
  stock: number;
}

export interface ProductColor {
  name: string;
  hex?: string;
  image?: string;
}

export interface ProductRating {
  average: number;
  count: number;
}

export type ProductCategory = 'hombre' | 'mujer' | 'deportivos' | 'hoodies-sacos' | 'chaquetas';

export interface ProductResponse {
  success: boolean;
  data: Product[];
  pagination?: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
  category?: string;
  total?: number;
}

export interface ProductSearchResponse {
  success: boolean;
  data: Product[];
  total: number;
  query: string;
}

export interface ProductDetailResponse {
  success: boolean;
  data: Product;
  relatedProducts: Product[];
}

// Filtros para productos
export interface ProductFilters {
  category?: ProductCategory;
  minPrice?: number;
  maxPrice?: number;
  sizes?: string[];
  colors?: string[];
  inStock?: boolean;
  featured?: boolean;
  sort?: 'price_asc' | 'price_desc' | 'newest' | 'popular' | 'name_asc' | 'name_desc';
  page?: number;
  limit?: number;
}
