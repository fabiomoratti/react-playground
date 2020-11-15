import React, {useState} from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handleSubmit');
        console.log('First Name: ' + firstName);
        console.log('Email: ' + email);
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
                            }}
                        />
                    </div>
                    {/*Either use onClick={handleSubmit} on the button or onSubmit={handleSubmit} on the form*/}
                    <button type='submit'>add person</button>
                </form>
            </article>
        </>
    );
};

export default ControlledInputs;
