import { expect } from '@open-wc/testing';
import CascadeSelect from './cascade-select.js';

describe('CascadeSelect', () => {
  it('<app-cascade-select> is an instance of CascadeSelect', async () => {
    const element = document.createElement('app-cascade-select');
    expect(element).to.be.instanceOf(CascadeSelect);
  });
});
