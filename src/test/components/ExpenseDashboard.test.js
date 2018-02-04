import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboard from '../../components/ExpenseDashboardPage.js';

test('should render dashboard page',() => {

    const result = shallow(<ExpenseDashboard />);
    expect(result).toMatchSnapshot();

});