import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import expenseTotal from './expense-total';
import numeral from 'numeral';

const expenseCount = (props) => {
    
     

     return (<p>viewing {props.state.length} expenses and totat is {numeral(expenseTotal(props.state) / 100).format('$0,0.00')}</p>);
}


const mapStateToProps = (state) => ({
    state:selectExpenses(state.expenses,state.filters)
  })


export default connect(mapStateToProps)(expenseCount)