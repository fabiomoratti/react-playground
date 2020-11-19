import React, {useState, useContext} from 'react';
import {data} from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

const PersonContext = React.createContext(undefined);
// returns two components - Provider, Consumer


const ContextAPI = () => {
    const [people, setPeople] = useState(data);
    const removePerson = (id) => {
        setPeople((people) => {
            return people.filter((person) => person.id !== id);
        });
    };
    return (
        /* PersonContext.Provider wraps the root component, may wrap the whole application */
        <PersonContext.Provider value={{removePerson, people}}>
            <h3>Context API</h3>
            <List/>
        </PersonContext.Provider>
    );
};

const List = () => {
    const {people} = useContext(PersonContext);
    // Alternative form without destructuring
    // const contextData = useContext(PersonContext);
    // contextData.people

    return (
        <>
            {people.map((person) => {
                return (
                    <SinglePerson
                        key={person.id}
                        {...person}
                    />
                );
            })}
        </>
    );
};

const SinglePerson = ({id, name}) => {
    const {removePerson} = useContext(PersonContext);
    return (
        <div className='item'>
            <h4>{name}</h4>
            <button onClick={() => removePerson(id)}>remove</button>
        </div>
    );
};

export default ContextAPI;
