import React from "react";
import ButtonBox from "../components/ButtonBox"
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('<ButtonBox />', () => {
  const buttonBox = shallow(<ButtonBox />);
  
    it('renders the correct html output', () => {
      expect(buttonBox.html()).toMatchSnapshot();
    });
});