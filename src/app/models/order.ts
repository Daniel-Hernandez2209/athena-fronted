export interface Order {
  _id: string;
  userId: string;
  orderNumber: string;
  items: OrderItem[];
  shippingAddress: UserAddress;
  total: number;
  subtotal: number;
  shipping: number;
  tax: number;
  status: OrderStatus;
  paymentId?: string;
  paymentStatus: PaymentStatus;
  paymentMethod: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  productId: string;
  productName: string;
  productImage: string;
  size: string;
  quantity: number;
  price: number;
  subtotal: number;
  sku: string;
}

export type OrderStatus =
  | 'pending'
  | 'confirmed'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled'
  | 'returned';

export type PaymentStatus =
  | 'pending'
  | 'approved'
  | 'rejected'
  | 'cancelled'
  | 'refunded';

export interface CreateOrderData {
  items: {
    productId: string;
    size: string;
    quantity: number;
  }[];
  shippingAddress: UserAddress;
  paymentMethod: string;
  notes?: string;
}
