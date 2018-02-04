import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount,setStartDate,setEndDate } from '../actions/filters';
import {DateRangePicker} from 'react-dates';
import Moment from 'moment';


class ExpenseListFilters extends React.Component {

 

   state = {
      callendarFocused:null
    }



onDatesChange = ({ startDate, endDate }) => {

  this.props.setStartDate(startDate);
  this.props.setEndDate(endDate);

  

}

onTextChange = (e) => {
  this.props.setTextFilter(e.target.value);
}

onSelectChange = (e) => {
  if (e.target.value === 'date') {
   this.props.sortByDate();
  } else if (e.target.value === 'amount') {
    this.props.sortByAmount();
  }
}
focusedInput = (callendarFocused) => {
      this.setState({ callendarFocused });
}
render() {


return (

  <div>
  <input
    type="text"
    value={this.props.filters.text}
    onChange={this.onTextChange}
  />
  <select
    value={this.props.filters.sortBy}
    onChange={this.onSelectChange}
  >
    <option value="date">Date</option>
    <option value="amount">Amount</option>
  </select>

  <DateRangePicker
  startDate={this.props.filters.startDate} 
  endDate={this.props.filters.endDate} 
  onDatesChange={this.onDatesChange} 
  focusedInput={this.state.callendarFocused} 
  onFocusChange={this.focusedInput} 
  numberOfMonths={1}
  isOutsideRange={() => false}
  hideKeyboardShortcutsPanel={true}
  />


</div>


);





  }
 



}



const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

const mapDispatchToProps = (dispatch) => ({

  setStartDate: (startDate) => { 
    dispatch(setStartDate(startDate));
    },
  setEndDate: (endDate) => {
    dispatch(setEndDate(endDate));
  },
  setTextFilter: (e) => { dispatch(setTextFilter(e)); },
  sortByDate: () => { dispatch(sortByDate()); },
  sortByAmount: () => { dispatch(sortByAmount()); }


});

export default connect(mapStateToProps)(ExpenseListFilters);

export { ExpenseListFilters };
