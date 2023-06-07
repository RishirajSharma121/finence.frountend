import React, { useState } from 'react';
import styled from "styled-components";

const Investment = () => {
    const element_style={
        fontSize:'2.5rem',
        color:'powderblue',
        textAlign:'center',
    }
  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    type: "",
    date: "",
    category: "",
    description: "",
  });

  const handleOnChange = (event) => {
    setInputState({ ...inputState, [event.target.id]: event.target.value });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <FormStyled>
      <h1 style={element_style}>Investment</h1>
        <div className="form-group">
          <label htmlFor="title">Name</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Name"
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            placeholder="Amount"
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type</label>
          <input
            type="text"
            className="form-control"
            id="type"
            placeholder="Type"
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date1">Start Date</label>
          <input
            type="date"
            className="form-control"
            id="date"
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date2">End Date</label>
          <input
            type="date"
            className="form-control"
            id="date"
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleOnSubmit}>
          Add Investment
        </button>
      </FormStyled>
    </>
  );
};

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-bottom: 15px;
  .form-group {
    margin:50px 0px 0pc 500px;
    margin-bottom: 1rem;
    align-text: center;
  }

  .form-control {
    padding: 0.5rem 0.75rem;
    border: 2px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &:focus {
      outline: none;
      border-color: #80bdff;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
  }
  .selects {
    display: flex;
    justify-content: flex-end;
    select {
      color: rgba(34, 34, 96, 0.4);
      &:focus,
      &:active {
        color: rgba(34, 34, 96, 1);
      }
    }
  }
  .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
    border-radius: 12px;
    margin-bottom: 4px;
    width: 20vh;
    &:hover {
      background-color: #0069d9;
      border-color: #0062cc;
    }
  }
`;

export default Investment;
