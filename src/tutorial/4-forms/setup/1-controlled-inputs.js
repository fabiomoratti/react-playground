import React, {useState} from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [people, setPeople] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handleSubmit');
        console.log('First Name: ' + firstName);
        console.log('Email: ' + email);
        if (firstName && email) {
            // ES5 version
            //const person = {firstName: firstName, email: email};
            // ES6 short version
            const person = {id: new Date().getTime().toString(), firstName, email};
            setPeople((people) => {
                return [...people, person]
            });
            console.log(person);
            setFirstName('');
            setEmail('');
        } else {
            console.log('Empty values');
            setError("Please add first name and email");
        }
    };
    return (
        <>
            <article>
                <form className='form' onSubmit={handleSubmit}>
                    <div className='form-control'>
                        <label htmlFor="firstName">Name: </label>
                        <input
                            type='text'
                            id='firstName'
                            name='firstName'
                            value={firstName}
                            onChange={(e) => {
                                console.log("First name onChanged called - ", e.target.value);
                                setFirstName(e.target.value);
                                setError('');
                            }}
                        />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="email">Email: </label>
                        <input
                            type='text'
                            id='email'
                            name='email'
                            value={email}
                            onChange={(e) => {
                                console.log("Email onChanged called - ", e.target.value);
                                setEmail(e.target.value);
                                setError('');
                            }}
                        />
                    </div>
                    <section>
                        {error && <h4>{error}</h4>}
                    </section>
                    {/*Either use onClick={handleSubmit} on the button or onSubmit={handleSubmit} on the form*/}
                    <button className="btn" type='submit'>add person</button>
                    <button className="btn" type='reset' onClick={() => {
                        setFirstName('');
                        setEmail('');
                        setError('');
                    }}>reset
                    </button>
                    <button className='btn' type='button' onClick={() => {
                        setPeople([])
                    }}>Clear
                    </button>
                </form>
                {
                    people.length === 0
                        ?
                        <div className="item" ><h4>No people</h4></div>
                        :
                        people.map((person) => {
                            const {id, firstName, email} = person;
                            return (
                                <div className="item" key={id}>
                                    <h4>First Name: {firstName}</h4>
                                    <p>Email: {email}</p>
                                </div>
                            );
                        })
                }
            </article>
        </>
    );
};

export default ControlledInputs;
