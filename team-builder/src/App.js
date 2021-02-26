import React, {Component, useState} from 'react';
import styled from 'styled-components';
import Form from './Components/Form';
import Person from './Components/Person';
//setting up div
const Comp = styled.div``;
const Wrapper = styled.div``;
const PersonWrapper = styled.div``;

//initialPerson constructor
const initialPerson = {name:'', email:'', role:''};

const App = ()=> 
{
  const [person,setPerson] = useState(initialPerson);
  const [people,setPeople] = useState([]);

  const change = (event) =>
  {
    const {name, value}  = event.target;
    //value from event
    //person = object
    setPerson({...person, [name]:value}); 
    //... fetch person info
    //change name to value
    //look at initialization
  }
  const submit = (event) =>
  {
    event.preventDefault(); // prevents page from reloading
    const newPerson =  {name:person.name, email:person.email, role:person.role};
    setPeople([...people, newPerson]);
    setPerson(initialPerson);//reset
    //people = array 
  }
  return (
    <Comp>
      <Wrapper>
        <Form person = {person} change = {change} submit = {submit}/>
      </Wrapper>
      <PersonWrapper>
        {
        people.map(person=>
        {
          return(
            <Person name = {person.name} email = {person.email} role = {person.role}/>
          )
        }
        )}
      </PersonWrapper>
    </Comp>
  )
}

export default App;
