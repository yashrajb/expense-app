import React from 'react';
import { shallow } from 'enzyme';
import {AddExpensePage} from '../../components/AddExpensePage';
import expenses from '../fixture/commonData';

test('should render',() => {
    const addExpense = jest.fn();
    const history = { push: jest.fn() }
    const result = shallow(<AddExpensePage addExpense={addExpense} history={history}/>);
    expect(result).toMatchSnapshot();
    
});

test('should render',() => {
    const addExpense = jest.fn();
    const history = { push: jest.fn() }
    const result = shallow(<AddExpensePage addExpense={addExpense} history={history}/>);
    result.find("ExpenseForm").prop("onSubmit")(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
    
});

