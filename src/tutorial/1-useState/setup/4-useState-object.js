import React, {useState} from 'react';

const UseStateObject = () => {
    const [person, setPerson] = useState({name: 'Peter', age: 24, message: 'hello world'});
    console.log("function")
    console.log(person);

    const changeMessage1 = () => {
        console.log("Change message 1 called");
        console.log(person);
        setPerson({...person, message: 'hello world 2'});
        console.log(person);
    }

    const changeMessage2 = () => {
        console.log("Change message 2 called");
        console.log(person);
        let newPerson = JSON.parse(JSON.stringify(person));
        newPerson.message = 'hello world 2';
        setPerson(newPerson);
        console.log("person");
        console.log(person);
        console.log("newPerson");
        console.log(newPerson);
    }

    const brokenChangeMessage1 = () => {
        console.log("Broken change message 1 called");
        console.log(person);
        // reference - the re-render is not triggered
        let newPerson = person;
        newPerson.message = 'hello world 2';
        setPerson(newPerson);
        console.log("person");
        console.log(person);
        console.log("newPerson");
        console.log(newPerson);
    }

    const brokenChangeMessage2 = () => {
        console.log("Broken change message 2 called");
        console.log(person);
        // reference - the re-render is not triggered
        person.message = 'hello world 2';
        setPerson(person);
        console.log("person");
        console.log(person);
    }

    return (
        <>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h3>{person.message}</h3>
            <button className="btn" onClick={() => changeMessage1()}>change message 1</button>
            <button className="btn" onClick={() => changeMessage2()}>change message 2</button>
            <button className="btn" onClick={() => brokenChangeMessage1()}>broken change message 1</button>
            <button className="btn" onClick={() => brokenChangeMessage2()}>broken change message 2</button>
        </>
    );
};

export default UseStateObject;
