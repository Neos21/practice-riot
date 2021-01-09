import { component } from 'riot';
import { expect } from 'chai';

import User from './user.riot';

describe('User Unit Test', () => {
  const mountUser = component(User);
  
  it('The component is properly rendered', () => {
    const div = document.createElement('div');
    const component = mountUser(div, {
      name: 'Jack'
    });
    expect(component.$('b').innerHTML).to.be.equal('Jack');
  });
});
