
import { createStore } from 'redux'

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */
function counter(state = {counter : 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {counter : state.counter + 1}
    case 'DECREMENT':
      return {counter : state.counter - 1}
    case 'INCREMENT_CUSTOM':
      return {counter : state.counter + action.payload}
    case 'DECREMENT_CUSTOM':
      return {counter : state.counter - action.payload}
    default:
      return state
  }
}



// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counter)

export default store;

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.


// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
