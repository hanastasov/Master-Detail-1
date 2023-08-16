import { Order } from "./order";
import { Product } from "./product";

export interface OrderDetail {
    "orderID": number,
    "productID": number,
    "unitPrice": number,
    "quantity": number,
    "discount": number,
    "order": Order,
    "product": Product
}
