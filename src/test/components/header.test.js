import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';


test("header is rendering?",() => {
    const result = shallow(<Header />);
    expect(result).toMatchSnapshot();
    //expect(result.find("h1").length).toBe(1);
});