import React from 'react';
import "tabler-react/dist/Tabler.css";
import { Card, Button } from "tabler-react";

const Home = () => {

    return (
        <>
            <h1>Hello world</h1>
            <Card>
                <Card.Header>
                    <Card.Title>Card Title</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Button color="primary">A Button</Button>
                </Card.Body>
            </Card>
        </>
    );
}

export default Home;