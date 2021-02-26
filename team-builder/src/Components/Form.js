import React from 'react';
// import styled from 'styled-components';

//

const Form = (props)=>
{
    const {person, change, submit} = props;
    console.log(props);
    return(
        <div>
            <form>
                <p>Name:</p>
                <input type = 'text' name = 'name' value = {person.name} onChange = {change}/>
                <p>Email:</p>
                <input type = 'email' name = 'email' value = {person.email} onChange = {change}/>
                <p>Role:</p>
                <input type = 'text' name = 'role' value = {person.role} onChange = {change}/>
                <button onClick = {submit}>Submit</button>
            </form>
        </div>
    );
};

export default Form;