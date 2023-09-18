import { BehaviorSubject } from "rxjs";
import { Order } from '../models/northwind/order';
import { northwindService } from "./northwind-service";

class OrderService {
    private _order$ = new BehaviorSubject<Order | null>(null);

    public get order(): BehaviorSubject<Order | null> {
        if (!this._order$.value) {
            northwindService.getOrderFromApi().then(v => this._order$.next(v));
        }

        return this._order$;
    }
}

export const orderService = new OrderService();
