import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    courses: 'react',
    errors: {
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
    },
  });

  const handleChange = (e) => {
    var errors = { ...state.errors };

    if (e.target.value === '') {
      errors[e.target.name] = `${e.target.name} is Required`;
    } else {
      errors[e.target.name] = '';
    }
    // setState[e.target.name]=e.target.value
    // console.log(state)
    // state[e.target.name]=e.target.value;
    setState({ ...state, errors, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log('state before::', state);
    e.preventDefault();
    var errKeys = Object.keys(state).filter((key) => {
      if (state[key] === '' && key != 'errors') {
        return key;
      }
    });
    if (errKeys.length >= 1) {
      alert('Please fill all fields');
    } else {
      console.log('state::', state);
    }
  };

  const handlereset = () => {
    setState({
      ...state,
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      courses: 'react',
      errors: {
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
      },
    });
  };

  return (
    <>
      <h3> User Form </h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label> First Name: </label>
          <input
            type="text"
            name="firstName"
            value={state.firstName}
            onChange={(e) => handleChange(e)}
          />{' '}
          <br />
          <span style={{ color: 'red' }}> {state.errors.firstName} </span>
        </div>
        <br />
        <div>
          <label> Last Name: </label>
          <input
            type="text"
            name="lastName"
            value={state.lastName}
            onChange={(e) => handleChange(e)}
          />
          <br />
          <span style={{ color: 'red' }}> {state.errors.lastName} </span>
        </div>
        <br />
        <div>
          <label> Email: </label>
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={(e) => handleChange(e)}
          />
          <br />
          <span style={{ color: 'red' }}> {state.errors.email} </span>
        </div>
        <br />
        <div>
          <label> Gender: </label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={(e) => handleChange(e)}
          />{' '}
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={(e) => handleChange(e)}
          />{' '}
          Female
          <br />
          <span style={{ color: 'red' }}> {state.errors.gender} </span>
        </div>
        <br />
        <div>
          <label> Courses: </label>
          <select
            name="courses"
            value={state.courses}
            onChange={(e) => handleChange(e)}
          >
            <option value="react"> React </option>
            <option value="node"> Node </option>
            <option value="mysql"> MySQL </option>
            <option value="mongo"> Mongo </option>
          </select>
        </div>
        <br />
        <button type="submit"> Submit </button> &nbsp;
        <button type="Reset" onClick={() => handlereset()}>
          {' '}
          Reset{' '}
        </button>{' '}
        &nbsp;
      </form>
    </>
  );
}
