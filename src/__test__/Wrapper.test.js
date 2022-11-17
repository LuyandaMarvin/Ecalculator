import React from "react";
import Wrapper from "../components/Wrapper"
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Wrapper />', () => {
  const wrapper = shallow(<Wrapper />);
  
    it('renders the correct html output', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });
});
