import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage.js';
import expenses from '../fixture/commonData.js';

test('should render',() => {
    const editExpense = jest.fn();
    const history = { push:jest.fn() };
    const removeExpense = jest.fn();
    const result = shallow(<EditExpensePage editExpense={editExpense} removeExpense={removeExpense} history={history} expense={expenses[2]} />);
    expect(result).toMatchSnapshot();

});

test('should render addexpense',() => {
    const editExpense = jest.fn();
    const history = { push:jest.fn() };
    const removeExpense = jest.fn();
    const result = shallow(<EditExpensePage editExpense={editExpense} removeExpense={removeExpense} history={history} expense={expenses[2]} />);
    result.find("ExpenseForm").prop("onSubmit")(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id,expenses[2]);

});

test('should render removeexpense',() => {
    const editExpense = jest.fn();
    const history = { push:jest.fn() };
    const removeExpense = jest.fn();
    const result = shallow(<EditExpensePage editExpense={editExpense} removeExpense={removeExpense} history={history} expense={expenses[2]} />);
    result.find("button").simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({
        id:expenses[2].id
    });
    

});

