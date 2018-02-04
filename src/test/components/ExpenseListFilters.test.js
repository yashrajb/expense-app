import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filter,altFilter } from '../fixture/filters.js';
import Moment from 'moment';


let setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate,result;

beforeEach(() => {

setTextFilter = jest.fn();
sortByDate = jest.fn();
sortByAmount = jest.fn();
setStartDate = jest.fn();
setEndDate = jest.fn();

    result = shallow(<ExpenseListFilters filters={filter} 
    setTextFilter={setTextFilter} 
    sortByDate = {sortByDate}
    sortByAmount = {sortByAmount }
    setStartDate = {setStartDate}
    setEndDate = { setEndDate }
    />);



})

test('should render expenselistfilters',() => {


    expect(result).toMatchSnapshot();

});

test('should render alt filters with expenselistfilters',() => {
    
    
       result.setProps({
           filters:altFilter
       });

       expect(result).toMatchSnapshot();
    
});


test('should change the text ',() => {

        const value = "hello"
    result.find("input").simulate("change",{
        target:{
            value
        }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);


});


test('should change date',() => {

    const value = 'date';
   result.setProps({
       filters:altFilter
   });
   result.find('select').simulate('change',{
       target: { value }
   });
   expect(sortByDate).toHaveBeenLastCalledWith();
       
    
    
});

test('should change amount',() => {
    
        const value = 'amount';
       
       result.find('select').simulate('change',{
           target: { value }
       });
       expect(sortByAmount).toHaveBeenLastCalledWith();
           
        
        
    });

    test('should ondatechange',() => {
        
           const startDate = Moment(0).add(4 , 'years');
           const endDate = Moment(0).add(8, 'years');
        
        result.find('DateRangePicker').prop('onDatesChange')({
            startDate,
            endDate
        });
        expect(setStartDate).toHaveBeenLastCalledWith(startDate);
        expect(setEndDate).toHaveBeenLastCalledWith(endDate);

    });

test('should focusedinput',() => {

const callendarFocused = 'endDate';

result.find('DateRangePicker').prop('onFocusChange')(callendarFocused);
expect(result.state('callendarFocused')).toBe( callendarFocused );





});