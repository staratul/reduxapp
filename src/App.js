import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decNumber, incNumber } from './actions/index';

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <div className="col-12 my-5 bg-dark" style={{ height: '400px', width: '500px', margin: 'auto' }}>
      <h3 className="text-light text-center">Increment / Decrement Number</h3>
      <div className="d-flex justify-content-between">
          <div style={{ margin: '25% 0 0 37%' }}>
            <button type="button" onClick={() => dispatch(decNumber())} className="button-minus border rounded-circle  icon-shape icon-sm mx-1 ">-</button>
            <input type="text" name="quantity" className="quantity-field border-0 text-center w-25" value={myState} />
            <button type="button" onClick={() => dispatch(incNumber())} className="button-plus border rounded-circle icon-shape icon-sm" style={{ marginLeft: '5px' }}>+</button>
          </div>
      </div>
    </div>
  )
}

export default App

