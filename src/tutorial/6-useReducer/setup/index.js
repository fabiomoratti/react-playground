import React, {useState, useReducer} from 'react';
import Modal from './Modal';
import {reducer} from "./reducer";

//import {data} from '../../../data';
//import {reducer} from "../final/reducer";
// reducer function


const defaultState = {
    people: [],
    isModelOpen: false,
    modalContent: ''
}

const initState = (defaultState) => {
    console.log("initState", defaultState);
    return defaultState;
}

const Index = () => {
    const [name, setName] = useState('');
    // the third argument - not mentioned in the course - is a function used to initialize the state.
    const [state, dispatch] = useReducer(reducer, defaultState, initState);

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

    const closeModal = () => {
        dispatch({type: 'CLOSE_MODAL'});
    }

    return (<>
        {state.isModelOpen && <Modal closeModal={closeModal} modalContent={state.modalContent}/>}
        <form onSubmit={handleSubmit} className="form">
            <div>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <button type="submit" className="btn">add</button>
        </form>
        {state.people.map((person) => {
            return (
                <div key={person.id} className="item">
                    <h4>{person.name}</h4>
                    <button
                        className="btn"
                        onClick={() => dispatch({type: 'REMOVE_ITEM', payload: person.id})}>
                        remove
                    </button>
                </div>);
        })}

    </>);
};

export default Index;
