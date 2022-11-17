import React from "react";
import Button from "../components/Button"
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CalcProvider from "../context/CalcContext";

configure({ adapter: new Adapter() });

describe('<Wrapper />', () => {
  const button = shallow(
    <CalcProvider>
         <Button  value={'='} key={1} />
    </CalcProvider>
  );
  
    it('renders the correct html output', () => {
      expect(button.html()).toMatchSnapshot();
    });
});