import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incrementNumber, decrementNumber } from './actions/index';

const App = () => {
//  create a reference to the store and the dispatch function (that we use for dispatching actions)
const myState = useSelector((state) => state.countNumber);

const dispatch = useDispatch();
  return (
    <>
      <div className="container text-center">
          <h1>Counter with Redux</h1>

          <div className="quantity mt-5 py-5">
          {/* add a arrow function > dispatch > use action here */}
          <button className="btn btn-primary p-3" type="DECREMENT" onClick={() => dispatch(decrementNumber())}>-</button>
            <span className="p-3">{myState}</span>
          <button className="btn btn-primary p-3" type="INCREMENT" onClick={() => dispatch(incrementNumber())}>+</button>
          </div>
      </div>
    </>
  )
}

export default App
