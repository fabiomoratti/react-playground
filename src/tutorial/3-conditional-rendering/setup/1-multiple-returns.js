import React, {useState, useEffect} from 'react';

const urls = [
    'https://api.github.com/users/fabiomoratti',
    'https://api.github.com/users/fabiomorattti',
    'https://api.github.comzzz/users/fabiomoratti'
];
const url = urls[Math.floor(Math.random() * 3)];

const MultipleReturns = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('no error');
    const [user, setUser] = useState('default user');

    useEffect(() => {
        fetch(url)
            .then((resp) => {
                console.log(resp);
                if (resp.status >= 200 && resp.status <= 299) {
                    return resp.json()
                } else {
                    throw new Error(resp.statusText);
                }
            })
            .then((user) => {
                console.log(user);
                const {login} = user;
                setUser(login);
                setIsLoading(false);
            })
            .catch(error => {
                // this
                console.log("In the catch handler");
                console.log(error);
                setErrorMessage(error + "");
                setIsLoading(false);
                setIsError(true);
            });
    }, []);

    if (isLoading) {
        return (<div><h1>Loading...</h1><h6>{url}</h6></div>);
    }

    if (isError) {
        return (<div><h1>Error</h1><h3>{errorMessage}</h3><h6>{url}</h6></div>);
    }

    return <div><h1>{user}</h1><h6>{url}</h6></div>;
};

export default MultipleReturns;
