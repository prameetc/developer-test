import React from 'react';
import {connect} from 'react-redux';
import {addItem, deleteItem} from './redux/actions';
import Todo from './views/Todo';


export default function App() {
  return (
    <div>
      <Todo />
    </div>
  );
}