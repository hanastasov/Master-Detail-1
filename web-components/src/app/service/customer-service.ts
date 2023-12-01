import { BehaviorSubject } from 'rxjs';
import { Customer } from '../models/northwind/customer';
import { northwindService } from './northwind-service';

class CustomerService {
    public customer$ = new BehaviorSubject<Customer | null>(null);

    public initializeCustomer() {
        return northwindService.getCustomer().then(v => {
            this.customer$.next(v);
        });
    }    
}

export const customerService = new CustomerService();
