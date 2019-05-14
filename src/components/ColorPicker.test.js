import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

describe('colorpicker component', () => {
  it('renders a colorpicker', () => {
    const wrapper = shallow(<ColorPicker />);
    expect(wrapper).toMatchSnapshot();
  });

  it('handles the red button press', () => {
    // intercept console.log calls
    console.log = jest.fn();
    const wrapper = shallow(<ColorPicker />);

    wrapper.find('button').at(0).simulate('click');

    expect(console.log).toHaveBeenCalledWith('red');
  });
  
});

