import { expect } from '@open-wc/testing';
import ListDetails from './list-details.js';

describe('ListDetails', () => {
  it('<app-list-details> is an instance of ListDetails', async () => {
    const element = document.createElement('app-list-details');
    expect(element).to.be.instanceOf(ListDetails);
  });
});
