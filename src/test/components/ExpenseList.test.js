import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixture/commonData';
import ExpenseListItem from '../../components/ExpenseListItem';

test('should render expenselistitem',() => {
    const result = shallow(<ExpenseList expenses={expenses}/>);
    expect(result).toMatchSnapshot();
});

test('should render expenselistitem',() => {
    const result = shallow(<ExpenseList expenses={[]}/>);
    expect(result).toMatchSnapshot();
});




