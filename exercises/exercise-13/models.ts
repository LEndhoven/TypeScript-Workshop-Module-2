interface RealizedOrder {
  orderNumber: string;
  customerName: string;
  product: string;
  quantity: number;
  price: number;
  deliveryDate: Date;
}

export const REALIZED_ORDER: RealizedOrder = {
  orderNumber: 'RO-123',
  customerName: 'John Doe',
  product: 'Laptop',
  quantity: 2,
  price: 1000,
  deliveryDate: new Date('2030-01-01'),
};

interface CheckedRealizedOrder {
  checkedOrderNumber: boolean;
  checkedCustomerName: boolean;
  checkedProduct: boolean;
  checkedQuantity: boolean;
  checkedPrice: boolean;
  checkedDeliveryDate: boolean;
}

export const CHECKED_REALIZED_ORDER: CheckedRealizedOrder = {
  checkedOrderNumber: true,
  checkedCustomerName: true,
  checkedProduct: true,
  checkedQuantity: true,
  checkedPrice: true,
  checkedDeliveryDate: true,
};
