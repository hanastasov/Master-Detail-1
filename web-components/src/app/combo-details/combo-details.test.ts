import { expect } from '@open-wc/testing';
import ComboDetails from './combo-details.js';

describe('ComboDetails', () => {
  it('<app-combo-details> is an instance of ComboDetails', async () => {
    const element = document.createElement('app-combo-details');
    expect(element).to.be.instanceOf(ComboDetails);
  });
});
