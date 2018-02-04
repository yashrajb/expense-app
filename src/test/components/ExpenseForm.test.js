import React from 'react';
import { shallow,stimulate } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm.js';
import expenses from '../fixture/commonData.js';
import Moment from 'moment';

test('should render no error',() => {

const result = shallow(<ExpenseForm />);
result.find('form').simulate("submit",{

    preventDefault: () => { }
});

expect(result.state('error').length).toBeGreaterThan(0);
expect(result).toMatchSnapshot();

});

test('should render expense 0',() => {
    
    const result = shallow(<ExpenseForm expense={[...expenses[0]]}/>);
    result.find('form').simulate("submit",{
    
        preventDefault: () => { }
    });
    
    expect(result.state('error').length).toBeGreaterThan(0);
    expect(result).toMatchSnapshot();
    
    });

    test('should render expense 1',() => {
        
        const result = shallow(<ExpenseForm expense={expenses[1]}/>);
        result.find('form').simulate("submit",{
        
            preventDefault: () => { }
        });
        
        expect(result.state('error').length).toBeGreaterThan(0);
        expect(result).toMatchSnapshot();
        
        });
    



test('should render onchange description',() => {
    const value = "description";
    const result = shallow(<ExpenseForm />);
    result.find('input').at(0).simulate('change',{
        target: { value }
    });
    expect(result.state("description")).toBe(value);
});

test('should render onchange note',() => {
    const value = "note";
    const result = shallow(<ExpenseForm />);
    result.find('textarea').at(0).simulate('change',{
        target: { value }
    });
    expect(result.state("note")).toBe(value);
});

test('should render onchange amount',() => {
    const value = '10.24';
    const result = shallow(<ExpenseForm />);
    result.find('input').at(1).simulate('change',{
        target: { value }
    });
    expect(result.state("amount")).toBe(value);
});


test('sholud call onsubmit fucntion',() => {

    const defaultFunction = jest.fn();
    const result = shallow(<ExpenseForm expenses={expenses[1]} onSubmit={defaultFunction} />);
    result.find('form').simulate('submit',{
        preventDefault: () => {}
    })
    expect(result.state("error")).toBe('');
    expect(defaultFunction).toHaveBeenLastCalledWith({

        description:expenses[1].description,
        createdAt:expenses[1].createdAt,
        amount:expenses[1].amount,
        note:expenses[1].note

    });


    

});



test('onDatechange ',() => {

    const now = Moment();
    const defaultFunction = jest.fn();
    const result = shallow(<ExpenseForm expenses={expenses[0]}/>);
    result.find('SingleDatePicker').prop("onDateChange")(now);
    expect(result.state("createdAt")).toEqual(now);


});

test('onFocusChange ',() => {
    
        const now = Moment();
        const defaultFunction = jest.fn();
        const result = shallow(<ExpenseForm expenses={expenses[0]}/>);
        result.find('SingleDatePicker').prop("onFocusChange")({ focused:true });
        expect(result.state("focus")).toEqual(true);
    
    
});


