import { addExpense,removeExpense,editExpense } from '../../actions/expenses';

test('should use remove object',() => {

const result = removeExpense({ id:"abcdefgjhijkl123456789" });
expect(result).toEqual({
    type: 'REMOVE_EXPENSE',
    id:"abcdefgjhijkl123456789"
})

});

test('should use edit object',() => {
    
    const result = editExpense("abcdefgjhijkl123456789", { abc:"abc123456789" });
    expect(result).toEqual({
        type: 'EDIT_EXPENSE',
        id:"abcdefgjhijkl123456789",
        updates:{
            abc:"abc123456789"
        }
    });
    
    });

