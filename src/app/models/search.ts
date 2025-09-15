export interface SearchFilters {
  query?: string;
  category?: ProductCategory;
  minPrice?: number;
  maxPrice?: number;
  sizes?: string[];
  colors?: string[];
  inStock?: boolean;
  sortBy?: string;
  page?: number;
  limit?: number;
}

export interface SearchResult {
  products: Product[];
  totalResults: number;
  currentPage: number;
  totalPages: number;
  filters: SearchFilters;
  suggestions?: string[];
}

// Constantes útiles
export const PRODUCT_CATEGORIES = {
  HOMBRE: 'hombre',
  MUJER: 'mujer',
  DEPORTIVOS: 'deportivos',
  HOODIES_SACOS: 'hoodies-sacos',
  CHAQUETAS: 'chaquetas'
} as const;

export const PRODUCT_SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'] as const;

export const ORDER_STATUSES = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  PROCESSING: 'processing',
  SHIPPED: 'shipped',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
  RETURNED: 'returned'
} as const;

export const PAYMENT_STATUSES = {
  PENDING: 'pending',
  APPROVED: 'approved',
  REJECTED: 'rejected',
  CANCELLED: 'cancelled',
  REFUNDED: 'refunded'
} as const;
