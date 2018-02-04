import selectExpenses from '../../selectors/expenses.js';
import expense from '../fixture/commonData.js';
import Moment from 'moment';

test('give textfilter',() => {

const filters = {
    text:'e',
    sortBy:'date', 
    startDate:undefined, 
    endDate:undefined
};

const result = selectExpenses(expense,filters);

expect(result).toEqual([expense[2],expense[1]]);



});

test('give dates',() => {
    
   const filters = {
    text:'',
    sortBy:'date', 
    startDate:undefined, 
    endDate:undefined

   };
    
    const result = selectExpenses(expense,filters);
    expect(result).toEqual([expense[2],expense[0],expense[1]]);
    
    });

test('gives startDate',() => {

    const filters = {
        text:'',
        sortBy:'date', 
        startDate:Moment(0), 
        endDate:undefined
    
       };

       const result = selectExpenses(expense,filters);
       expect(result).toEqual([expense[2],expense[0]]);


});


test('gives endDate',() => {
    
        const filters = {
            text:'',
            sortBy:'date', 
            startDate:undefined, 
            endDate:Moment(0)
        
           };
    
           const result = selectExpenses(expense,filters);
           expect(result).toEqual([expense[0],expense[1]]);
    
    
    });



