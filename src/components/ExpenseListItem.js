import React from 'react';
import { Link } from 'react-router-dom';


const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <h3><Link to={`/edit/${id}`}>{description}</Link></h3>
    <p>{amount} - {createdAt}</p>
  </div>
);

export default ExpenseListItem;
