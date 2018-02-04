import React from 'react';
import Moment from 'moment';
import { SingleDatePicker } from 'react-dates';
//uimport 'react-dates/lib/css/_datepicker.css';

// console.log(Moment());

class ExpenseForm extends React.Component {

constructor(props) {

    super(props);

this.state = {
    description: props.expenses ? props.expenses.description : '',
    amount:props.expenses ? (props.expenses.amount / 100).toString() : undefined,
    note:props.expenses ? props.expenses.note : '',
    createdAt:props.expenses ? Moment(props.expenses.createdAt) : Moment(),
    focus:false,
    error:''

};


}

   

    onChangeDescription = (e) => {

        const description = e.target.value;
        this.setState({
            description
        })


    }

    onChangeAmount = (e) => {
        
            const amount = e.target.value;
            if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {

                this.setState({
                    amount
                });
        
        
            }

    }
                

    onChangeNote = (e) => {
                
        
        const note = e.target.value;
        this.setState(()=>({
         note
        }));
                
                
                    }

        onDateChange = (createdAt) => {

            this.setState({

                createdAt

            });

        }

        onFocusedChange = ({ focused }) => {
            this.setState({
                focus:focused
            });
        }

        onSubmit = (e) => {

            e.preventDefault();

            if(!this.state.description || !this.state.amount) {

                this.setState({
                    error:"Please fill the description or amount."
                });

            }else {

                this.setState({
                    error:''
                });

                this.props.onSubmit({
                    description:this.state.description,
                    createdAt:this.state.createdAt.valueOf(),
                    amount:parseFloat(this.state.amount, 10) * 100,
                    note:this.state.note
                });

                
                
            }



        }

   

 render() {


    return (

        <div>
        { (this.state.error === " ") ? '' :<p>{this.state.error}</p>  }
        <h1>Expense Form</h1>
        <form onSubmit={this.onSubmit}>
        <input type="text" 
        value={this.state.description} autoFocus 
        onChange={this.onChangeDescription} placeholder="Description...."/>

        <input
        type="text"
        value={this.state.amount}
        onChange={this.onChangeAmount}
        placeholder="Amount..." />
 
        <SingleDatePicker
        date={this.state.createdAt} // momentPropTypes.momentObj or null
        onDateChange={this.onDateChange} // PropTypes.func.isRequired
        focused={this.state.focus} // PropTypes.bool
        numberOfMonths={1}
        isOutsideRange={() => false}
        onFocusChange={this.onFocusedChange} // PropTypes.func.isRequired
      />
    

        <textarea 
        type="text"
        value={this.state.note} 
        onChange={this.onChangeNote}
        placeholder="Note..."

        />
       

        <input type="submit"
        value="Submit"
        />

        </form>
        


        
        </div>




    );




 }




}

export default ExpenseForm;