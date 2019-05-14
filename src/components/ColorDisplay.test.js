import React from 'react';
import { shallow } from 'enzyme';
import ColorDisplay from './ColorDisplay';

describe('ColorDisplay componenet', () => {
  it('renders a colordisplay', () => {
    const wrapper = shallow(<ColorDisplay color ="#FF0000" />);
    expect(wrapper).toMatchSnapshot();
  });
})
;
