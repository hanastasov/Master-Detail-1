import { expect } from '@open-wc/testing';
import SelectDetails from './select-details.js';

describe('SelectDetails', () => {
  it('<app-select-details> is an instance of SelectDetails', async () => {
    const element = document.createElement('app-select-details');
    expect(element).to.be.instanceOf(SelectDetails);
  });
});
