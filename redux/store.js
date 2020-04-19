const { createStore, combineReducers } = require('redux')

// action types
const UPDATE_USER = 'UPDATE_USER'
const UPDATE_CONTACT = 'UPDATE_CONTACT'

const merge = (prev, next) => Object.assign({}, prev, next)

const initialState = {user: {}, contacts: []}

const contactReducer = (state = [], action) => {
	switch (action.type) {
		case UPDATE_CONTACT:
			// statements_1
			return [...state, action.payload]
		default:
			// statements_def
			return state
	}
}

const userReducer = (state = {}, action) => {
	switch(action.type) {
		case UPDATE_USER:
			return merge(state, action.payload)
		case UPDATE_CONTACT:
			return merge(state, {prevContact: action.payload})
		default:
			return state
	}
}

const reducer = combineReducers({
	user: userReducer,
	contacts: contactReducer,
});

const updateUser = update => ({
	type: UPDATE_USER,
	payload: update,
});

const addContact = newContact => ({
	type: UPDATE_CONTACT,
	payload: newContact,
});

const store = createStore(reducer)
// store.dispatch(updateUser({foo: 'bar'}))
// store.dispatch(updateUser({bar: 'foo'}))
// store.dispatch(updateUser({baz: 'foo'}))


store.dispatch(addContact({name: 'Jane Doe', phone: '254792921440'}))
store.dispatch(addContact({name: 'Mike Blake', phone: '254791218799'}))
store.dispatch(addContact({name: 'Edwin Lomolo', phone: '254739769909'}))

// console.log(store.getState())
export { store, addContact }
