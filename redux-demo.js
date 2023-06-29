// 1. import redux library
const redux = require("redux");
//2. create a reducer
const counterReducer = (state = { counter: 0 }, action) => {
	if (action.type === "increment") {
		return {
			counter: state.counter + 1
		}
	}
	if (action.type === "decrement") {
		return {
			counter: state.counter - 1
		}
	}
	return state;
}
// 3. create store - reducer executed for the first time without action, state is initialized, 
const store = redux.createStore(counterReducer);
// 4. create subscriber
const counterSubscriber = () => {
	const latestState = store.getState();
	console.log(latestState);
}
// 5 . subscribe to store
store.subscribe(counterSubscriber);

// 6. dispatch to store - reducer is re-executed with action,  state is updated here
store.dispatch({ type: "increment" }); //1
store.dispatch({ type: "decrement" }); //0