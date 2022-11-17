import React from "react";
import App from "../App"
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CalcProvider from "../context/CalcContext";

configure({ adapter: new Adapter() });


describe('<App />', () => {
  beforeEach(()=> {
    component.find('.clear').at(0).simulate('click')
  })

    const component = mount(
        <CalcProvider>
             <App/>
        </CalcProvider>
      );
  
    it('renders the correct html output', () => {
      expect(component.html()).toMatchSnapshot();
    });

    it("should display 0 if non number buttons are clicked.", () => {
        expect(component.find('.equals').text()).toBe('=');
        expect(component.find('.opt').at(0).text()).toBe('/');
        expect(component.find('.opt').at(1).text()).toBe('x');
        expect(component.find('.opt').at(2).text()).toBe('-');
        expect(component.find('.opt').at(3).text()).toBe('+');
        

        component.find('.equals').simulate('click')
        component.find('.opt').at(0).simulate('click')
        component.find('.opt').at(1).simulate('click')
        component.find('.opt').at(2).simulate('click')
        component.find('.opt').at(3).simulate('click')

        expect(component.find('.screen').at(1).text()).toBe('0')
    })

    it("should do addition calculation correctly", () => {
      component.find('.num').at(0).simulate('click')
      expect(component.find('.screen').at(0).text()).toBe('7')

      component.find('.opt').at(3).simulate('click')

      component.find('.num').at(0).simulate('click')
      component.find('.equals').simulate('click')
      expect(component.find('.screen').at(0).text()).toBe('14')
    })

    it("should do subtraction calculation correctly", () => {
      component.find('.num').at(0).simulate('click')
      expect(component.find('.screen').at(0).text()).toBe('7')

      component.find('.opt').at(2).simulate('click')

      component.find('.num').at(3).simulate('click')
      expect(component.find('.screen').at(0).text()).toBe('4')

      component.find('.equals').simulate('click')
      expect(component.find('.screen').at(0).text()).toBe('3')
    })

    it("should do division calculation correctly", () => {
      component.find('.num').at(1).simulate('click')
      expect(component.find('.screen').at(1).text()).toBe('8')

      component.find('.opt').at(0).simulate('click')

      component.find('.num').at(7).simulate('click')
      expect(component.find('.screen').at(0).text()).toBe('2')

      component.find('.equals').simulate('click')
      expect(component.find('.screen').at(0).text()).toBe('4')
    })

    it("should do multiply calculation correctly", () => {
      component.find('.num').at(1).simulate('click')
      expect(component.find('.screen').at(1).text()).toBe('8')

      component.find('.opt').at(1).simulate('click')

      component.find('.num').at(7).simulate('click')
      expect(component.find('.screen').at(0).text()).toBe('2')

      component.find('.equals').simulate('click')
      expect(component.find('.screen').at(0).text()).toBe('16')
    })

    it("should display zero if zero is clicked while the the only number is 0 on screen", () => {
      component.find('.num').at(9).simulate('click')
      expect(component.find('.screen').at(1).text()).toBe('0')
    })

    it("should perfom persent calcualtion correctly", () => {
      component.find('.num').at(6).simulate('click')
      component.find('.num').at(9).simulate('click')
      expect(component.find('.screen').at(1).text()).toBe('10')

      component.find('.persent').simulate('click')
      expect(component.find('.screen').at(1).text()).toBe('0.1')
    })

    it("should perfom invert calcualtion correctly", () => {
      component.find('.num').at(6).simulate('click')
      component.find('.num').at(9).simulate('click')
      expect(component.find('.screen').at(1).text()).toBe('10')

      component.find('.invert').simulate('click')
      expect(component.find('.screen').at(1).text()).toBe('-10')
    })

    it("should add comma on calculator display", () => {
      component.find('.num').at(6).simulate('click')
      expect(component.find('.screen').at(1).text()).toBe('1')

      component.find('.comma').simulate('click')
      component.find('.num').at(3).simulate('click')
      expect(component.find('.screen').at(1).text()).toBe('1.4')
    })
});
