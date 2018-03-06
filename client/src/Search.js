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
    <Form onSubmit={props.handleSubmit}>
      <Form.Group>
        <Form.Input icon='search' type='text' value={props.query} onChange={props.handleQuery} />
        {/* <Input icon='search' placeholder='Search...' /> */}
        <Form.Button type='submit' value='Search'>Search</Form.Button>
      </Form.Group>
      <Dropdown fluid multiple search
        onChange={props.handleAllergy}
        options={allergyOptions}
        placeholder="Be kind. Don't kill people with your food. Any Allergies?"
        selection
        value={allergyOptions.value}
      />
      <Dropdown fluid multiple search
        onChange={props.handleDiet}
        options={dietOptions}
        placeholder="Don't worry, it's just a phase. Special diet requirements?"
        selection
        value={dietOptions.value}
      />
      {/* <Form.Group grouped>

        <label>Allergies?</label>
        <Checkbox
          onChange={addAllergy}
          value={'394^Peanut-Free'}
          label='Peanuts'
          control='input'
          type='checkbox'
        />
        <Checkbox
          onChange={addAllergy}
          value={'396^Dairy-Free'}
          label='Dairy'
          control='input'
          type='checkbox'
        />
        <Checkbox
          onChange={addAllergy}
          value={'397^Egg-Free'}
          label='Eggs'
          control='input'
          type='checkbox'
        />
        <Checkbox
          onChange={addAllergy}
          value={'395^Tree Nut-Free'}
          label='Tree Nut'
          control='input'
          type='checkbox'
        />
        <Checkbox
          onChange={addAllergy}
          value={'398^Seafood-Free'}
          label='Seafood'
          control='input'
          type='checkbox'
        />
        <Checkbox
          onChange={addAllergy}
          value={'393^Gluten-Free'}
          label='Gluten'
          control='input'
          type='checkbox'
        />
        <Checkbox
          onChange={addAllergy}
          value={'392^Wheat-Free'}
          label='Wheat'
          control='input'
          type='checkbox'
        />
        <Checkbox
          onChange={addAllergy}
          value={'400^Soy-Free'}
          label='Soy'
          control='input'
          type='checkbox'
        />
      </Form.Group> */}
      {/* <Form.Group grouped>
        <label>Specific Diet?</label>
        <Checkbox
          onChange={addAllergy}
          value={'388^Lacto vegetarian'}
          label='Lacto Vegetarian'
          control='input'
          type='checkbox'
        />
        <Checkbox
          onChange={addAllergy}
          value={'389^Ovo vegetarian'}
          label='Ovo Vegetarian'
          control='input'
          type='checkbox'
        />
        <Checkbox
          onChange={addAllergy}
          value={'387^Lacto-ovo vegetarian'}
          label='Lacto-Ovo Vegetarian'
          control='input'
          type='checkbox'
        />
        <Checkbox
          onChange={addAllergy}
          value={'386^Vegan'}
          label='Vegan'
          control='input'
          type='checkbox'
        />
        <Checkbox
          onChange={addAllergy}
          value={'390^Pescetarian'}
          label='Pescetarian'
          control='input'
          type='checkbox'
        />
        <Checkbox
          onChange={addAllergy}
          value={'403^Paleo'}
          label='Paleo'
          control='input'
          type='checkbox'
        />
      </Form.Group> */}
    </Form>
  );
}

export default Search
