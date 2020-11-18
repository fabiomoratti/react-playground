import React, {useState, useReducer} from 'react';
import Modal from './Modal';
import {data} from '../../../data';
//import {reducer} from "../final/reducer";
// reducer function

const reducer = (state, action) => {
    console.log(state, action);
    if (action.type === 'ADD_ITEM') {
        const newPeople = [...state.people, action.payload];
        return {...state,
            people: newPeople,
            isModelOpen: true,
            modalContent: 'item added'
        };
    } else if (action.type === 'NO_VALUE_ACTION'){
        return {...state,
        isModelOpen: true,
        modalContent: 'no item'};
    }
    //return state;
    throw new Error('no matching action type');
}

const defaultState = {
    people: [],
    isModelOpen: false,
    modalContent: ''
}

const Index = () => {
    const [name, setName] = useState('');
    const [state, dispatch] = useReducer(reducer, defaultState);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
            const newItem = {id: new Date().getTime().toString(), name};
            dispatch({type: 'ADD_ITEM', payload: newItem});
            setName('');
        } else {
            dispatch({type: 'NO_VALUE_ACTION'});
        }
    }

    return (<>
        {state.isModelOpen && <Modal modalContent={state.modalContent}/>}
        <form onSubmit={handleSubmit} className="form">
            <div>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <button type="submit" className="btn">add</button>
        </form>
        {state.people.map((person) => {
            return (<div key={person.id}>
                <h4>{person.name}</h4>
            </div>);
        })}

    </>);
};

export default Index;
