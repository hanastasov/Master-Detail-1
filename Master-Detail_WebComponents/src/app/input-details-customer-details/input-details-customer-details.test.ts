import { expect } from '@open-wc/testing';
import InputDetailsCustomerDetails from './input-details-customer-details.js';

describe('InputDetailsCustomerDetails', () => {
  it('<app-input-details-customer-details> is an instance of InputDetailsCustomerDetails', async () => {
    const element = document.createElement('app-input-details-customer-details');
    expect(element).to.be.instanceOf(InputDetailsCustomerDetails);
  });
});
