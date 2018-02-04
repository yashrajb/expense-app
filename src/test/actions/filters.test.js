import { setStartDate,setEndDate,sortByDate,sortByAmount,setTextFilter } from '../../actions/filters.js';
import Moment from 'moment';

test('should return a object with startDate',() => {


   

    const result = setStartDate(Moment(0));

    expect(result).toEqual({
        type: 'SET_START_DATE',
        startDate:Moment(0)
    });


});


test('should return a object with endDate',() => {
    
    
       
    
        const result = setEndDate(Moment(0));
    
        expect(result).toEqual({
            type: 'SET_END_DATE',
            endDate:Moment(0)
        });
    
    
    });


    test('should return a SORT_BY_AMOUNT',() => {
        const result = sortByAmount();

        expect(result).toEqual({
            type:"SORT_BY_AMOUNT"
        });
    });

    test('should return a SORT_BY_DATE',() => {
        const result = sortByDate();

        expect(result).toEqual({
            type:"SORT_BY_DATE"
        });
    });

    test('should return a SORT_BY_AMOUNT',() => {
        const result = sortByAmount();

        expect(result).toEqual({
            type:"SORT_BY_AMOUNT"
        });
    });

    test('should return a SET_TEXT_FILTER',() => {


        const result = setTextFilter();
        expect(result).toEqual({


            type: 'SET_TEXT_FILTER',
            text:''



        });


    });


    test('should return a SET_TEXT_FILTER',() => {
        
        
                const result = setTextFilter("hello");
                expect(result).toEqual({
        
        
                    type: 'SET_TEXT_FILTER',
                    text:'hello'
        
        
        
                });
        
        
            });


        