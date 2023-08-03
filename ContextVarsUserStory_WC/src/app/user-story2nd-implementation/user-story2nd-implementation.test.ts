import { expect } from '@open-wc/testing';
import UserStory2ndImplementation from './user-story2nd-implementation.js';

describe('UserStory2ndImplementation', () => {
  it('<app-user-story2nd-implementation> is an instance of UserStory2ndImplementation', async () => {
    const element = document.createElement('app-user-story2nd-implementation');
    expect(element).to.be.instanceOf(UserStory2ndImplementation);
  });
});
