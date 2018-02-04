import React from 'react';
import ExpenseForm from './ExpenseForm.js';
import { addExpense } from '../actions/expenses.js';
import { connect } from 'react-redux';




class AddExpensePage extends React.Component {

  onSubmit = (expense) => {
    this.props.addExpense(expense);
    this.props.history.push('/');
  }

      render() {


              return (
                <div>
                <ExpenseForm onSubmit={this.onSubmit}/>
                </div>
              );


      };


}

const mapDispatchToProps = (dispatch) => {
  return {
    addExpense:(expense) => dispatch(addExpense(expense))
  }
} 
export default connect(undefined,mapDispatchToProps)(AddExpensePage);
export { AddExpensePage };