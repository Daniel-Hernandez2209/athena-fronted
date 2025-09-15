export interface PSEPayment {
  _id: string;
  orderId: string;
  amount: number;
  currency: string;
  method: 'pse';
  status: PaymentStatus;
  pseTransactionId?: string;
  pseReference: string;
  pseBank?: string;
  pseBankList?: PSEBank[];
  description: string;
  buyer: PaymentBuyer;
  createdAt: string;
  updatedAt: string;
}

export interface PSEBank {
  id: string;
  name: string;
  image?: string;
}

export interface PaymentBuyer {
  email: string;
  fullName: string;
  phone: string;
  document: string;
  documentType: string;
}

export interface PSEInitResponse {
  success: boolean;
  data: {
    paymentUrl: string;
    reference: string;
    banks: PSEBank[];
  };
  message: string;
}
