export const reducer = (state, action) => {
    console.log(state, action);
    if (action.type === 'ADD_ITEM') {
        const newPeople = [...state.people, action.payload];
        return {
            ...state,
            people: newPeople,
            isModelOpen: true,
            modalContent: 'item added'
        };
    }

    if (action.type === 'REMOVE_ITEM') {
        const newPeople = state.people.filter((person) => person.id !== action.payload);
        return {
            ...state,
            people: newPeople,
            isModelOpen: true,
            modalContent: 'item removed'
        };
    }

    if (action.type === 'NO_VALUE_ACTION') {
        return {
            ...state,
            isModelOpen: true,
            modalContent: 'no item'
        };
    }

    if (action.type === 'CLOSE_MODAL') {
        return {
            ...state,
            isModelOpen: false,
            modalContent: ''
        };
    }

    //return state;
    throw new Error('no matching action type');
}
