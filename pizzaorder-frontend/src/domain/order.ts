import { OrderStatus } from './order-status';
import { Product } from 'src/domain/product';

export interface Order {
    id: number;
    name: string;
    address: string;
    products: Product[];
    phoneNumber: string;
    status: OrderStatus;
    createdAt: Date;
    modifiedAt: Date;
}