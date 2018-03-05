import React from 'react';
import {Form, Checkbox} from 'semantic-ui-react'

const Search = (props) => {

  const addAllergy = (e) => {
    // if(e.target.parentNode.className !== 'ui checkbox') {
    //   props.handleChecked('')
    // } else if (e.target.parentNode.className !== 'ui checked checkbox') {
      props.handleChecked(e.target.parentNode.children[0].value)
    // }
  }

  return (
    <Form onSubmit={props.handleSubmit}>
      <input type='text' value={props.query} onChange={props.handleQuery} />
      <input type='submit' value='Search' />
      <Form.Group grouped>
        <label>Allergies?</label>
        <Form.Field>
          <Checkbox onChange={addAllergy} value={'394^Peanut-Free'} label='Peanuts' control='input' type='checkbox' />
        </Form.Field>
        <Form.Field>
          <Checkbox onChange={addAllergy} value={'396^Dairy-Free'} label='Dairy' control='input' type='checkbox' />
          </Form.Field>
      </Form.Group>
    </Form>
  );
}

export default Search
