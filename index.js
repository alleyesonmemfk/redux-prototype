function createStore(initialState) {
	let state = initialState

	function getState() {
		return state
	}
	return { getState }
}

const store = createStore([{ id: 1, description: 'Task 1', completed: false }])

console.log(store.getState())
