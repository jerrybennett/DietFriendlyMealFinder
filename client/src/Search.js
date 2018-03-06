import React from 'react';
import {Container, Form, Checkbox, Button, Dropdown, Input} from 'semantic-ui-react'
import allergyOptions from './RecipeContainer'

const Search = (props) => {

  const addAllergy = (e) => {
    props.handleChecked(e.target.parentNode.children[0].value)
  }

  let allergyOptions = props.allergyOptions
  let dietOptions = props.dietOptions

  return (
    <Container>
      <Form onSubmit={props.handleSubmit}>
        <Form.Group>
          <Form.Input icon='search' type='text' value={props.query} onChange={props.handleQuery} />
          {/* <Input icon='search' placeholder='Search...' /> */}
          <Form.Button type='submit' value='Search'>Search</Form.Button>

          <Dropdown fluid multiple search
            onChange={props.handleAllergy}
            options={allergyOptions}
            placeholder="Any Allergies?"
            selection
            value={allergyOptions.value}
          />
          <Dropdown fluid multiple search
            onChange={props.handleDiet}
            options={dietOptions}
            placeholder="Special diet requirements?"
            selection
            value={dietOptions.value}
          />
        </Form.Group>
      </Form>
    </Container>
  );
}

export default Search
