import React from 'react';
import { shallow } from 'enzyme';
import Dog from './Dog';

describe('Dog component', () => {
  it('renders dog info', () => {
    const wrapper = shallow(<Dog name= "spot" age={4} weight= "1" />);
    expect(wrapper).toMatchSnapshot();
  });
});
