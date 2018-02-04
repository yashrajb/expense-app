import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixture/commonData';
import ExpenseListItem from '../../components/ExpenseListItem';


test('should render expenseListitem',() => {
    
        const result = shallow(<ExpenseListItem {...expenses[0]}/>);
        expect(result).toMatchSnapshot();
    
    });