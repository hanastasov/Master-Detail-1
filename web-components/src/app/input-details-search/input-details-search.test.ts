import { expect } from '@open-wc/testing';
import InputDetailsSearch from './input-details-search.js';

describe('InputDetailsSearch', () => {
  it('<app-input-details-search> is an instance of InputDetailsSearch', async () => {
    const element = document.createElement('app-input-details-search');
    expect(element).to.be.instanceOf(InputDetailsSearch);
  });
});
