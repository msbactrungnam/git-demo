import React, { useState } from 'react';
import UserForm from './UserForm';
import Greeting from './Greeting';

function App_BT2() {
    const [name, setName] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div>
        <UserForm onChange={handleNameChange}></UserForm>
        <Greeting name={name} ></Greeting>
        </div>
    );
}

export default App_BT2;