import react from react;
import {useReducer} from 'react';

const reducer = (state, action) => {
  switch (action) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1

    default:
      throw new Error()

  }
}

const Counter = () => {
  const [cont, dispatch] = useReducer(reducer,0)
  return (
    <>
    Counter: {count}
    <button onClick={() => dispatch('INCREMENT')}+</button>
    <button onClick={() => dispatch('DECREMENT')}-</button>
    </>
  )
}

export default Counter;
