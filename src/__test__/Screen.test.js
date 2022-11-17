import React from "react";
import Screen from "../components/Screen"
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CalcProvider from "../context/CalcContext";

configure({ adapter: new Adapter() });

describe('<Screen />', () => {
    const screen = shallow(
        <CalcProvider>
             <Screen />
        </CalcProvider>
      );
  
    it('renders the correct html output', () => {
      expect(screen.html()).toMatchSnapshot();
    });
});