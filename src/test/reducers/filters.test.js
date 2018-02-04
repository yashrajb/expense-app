import filterSelect from '../../reducers/filters.js';
import Moment from 'moment';

test('get a default value', () => {

const result = filterSelect(undefined,{ type:"@@INIT" });

    expect(result).toEqual({
       
            text: '',
            sortBy: 'date',
            startDate: Moment().startOf('month'),
            endDate: Moment().endOf('month')
    });

});

test('get a set_text_filter', () => {

    const currentState = {
        text:'',
        startDate:undefined,
        endDate:undefined,
    }
    
    const result = filterSelect(currentState,{ type:"SET_TEXT_FILTER",text:"Hello" });
    
        expect(result.text).toBe("Hello");
    
    });

    test('get a sortByDate', () => {
        
            const currentState = {
                text:'',
                startDate:undefined,
                endDate:undefined,
                sortBy:'amount'
            }
            
            const result = filterSelect(currentState,{ type:"SORT_BY_DATE" });
            
            expect(result.sortBy).toBe("date");
            
});


test('get a sortByAmount', () => {
    
        const currentState = {
            text:'',
            startDate:undefined,
            endDate:undefined,
            sortBy:'amount'
        }
        
        const result = filterSelect(currentState,{ type:"SORT_BY_AMOUNT" });
        
        expect(result.sortBy).toBe("amount");
        
});

test('get as startdate',() => {

    const currentState = {
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'
    }
    
    const result = filterSelect(currentState,{ type:"SET_START_DATE",startDate:"12-jan-2016" });
    
    expect(result.startDate).toBe("12-jan-2016");

});


test('get as enddate',() => {
    
        const currentState = {
            text:'',
            startDate:undefined,
            endDate:undefined,
            sortBy:'amount'
        }
        
        const result = filterSelect(currentState,{ type:"SET_END_DATE",endDate:"12-jan-2019" });
        
        expect(result.endDate).toBe("12-jan-2019");
    
    });
