// action types
const UPDATE_USER = 'UPDATE_USER'
const UPDATE_CONTACT = 'UPDATE_CONTACT'

const merge = (prev, next) => Object.assign({}, prev, next)
// const reducer = (state, update) => merge(state, update)

class Store {
	constructor(reducer, initialState) {
		this.reducer = reducer
		this.state = initialState
	}

	getState() {
		return this.state
	}

	dispatch(update) {
		this.state = this.reducer(this.state, update)
	}
}

const initialState = {user: {}, contacts: []}

const contactReducer = (state, action) => {
	if (action.type === UPDATE_CONTACT) {
		return [...state, action.payload]
	}
	return state
}

const userReducer = (state, action) => {
	if (action.type === UPDATE_USER) {
		return merge(state, action.payload)
	}
	if (action.type === UPDATE_CONTACT) {
		return merge(state, {prevContact: action.payload})
	}
	return state
}

const reducer = (state, action) => ({
	user: userReducer(state.user, action),
	contacts: contactReducer(state.contacts, action),
})

const updateUser = update => ({
	type: UPDATE_USER,
	payload: update,
});

const updateContact = newContact => ({
	type: UPDATE_CONTACT,
	payload: newContact,
});

const store = new Store(reducer, initialState)
store.dispatch(updateUser({foo: 'bar'}))
store.dispatch(updateUser({bar: 'foo'}))
store.dispatch(updateUser({baz: 'foo'}))


store.dispatch(updateContact({name: 'Jane Doe', phone: '254792921440'}))
store.dispatch(updateContact({name: 'Mike Blake', phone: '254791218799'}))
store.dispatch(updateContact({name: 'Edwin Lomolo', phone: '254739769909'}))

console.log(store.getState())
