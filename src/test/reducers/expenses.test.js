import selectExpenses from '../../reducers/expenses';
import expenses from '../fixture/commonData';
import Moment from 'moment';

test('should give a default ',() => {

    const result = selectExpenses(undefined,{ type:'@@INIT' });
    expect(result).toEqual([]);


});


test('should add expense ',() => {
    
        const expense = { 
            id: "12345678910111213",
            description:"Hello world",
            note:'',
            amount:12345,
            createdAt:Moment()
        }

    const action = {
        type:"ADD_EXPENSE",
        expense
    }
        const result = selectExpenses(expenses,action);
        expect(result).toEqual([...expenses,expense]);
    
    
});

test('should remove expense',() => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id:expenses[0].id
    }

    const result = selectExpenses(expenses,action);
    expect(result).toEqual([expenses[1],expenses[2]]);

});

test('should default remove expense',() => {

    const action = {
        type:"REMOVE_EXPENSE",
        
    }
    const result = selectExpenses(expenses,action);
    expect(result).toEqual([...expenses]);

});

test('should default remove expense',() => {
    
        const updates = {
            amount:5000
        }
        const action = {
            type:"EDIT_EXPENSE",
            id:expenses[0].id,
            updates
        }
        const result = selectExpenses(expenses,action);
        expect(result[0].amount).toEqual(5000);
    
    });


    test('should default remove expense',() => {
        
            const updates = {
                amount:5000
            }
            const action = {
                type:"EDIT_EXPENSE",
                id:"abcdefghigklmnpqr",
                updates
            }
            const result = selectExpenses(expenses,action);
            expect(result).toEqual([...expenses]);
        
        });
    
