
import React from 'react';

function UserForm(props) {
    return (
        <div>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" onChange={props.onChange} />
        </div>
    );
}

export default UserForm;