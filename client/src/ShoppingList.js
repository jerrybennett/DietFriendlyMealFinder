import React from 'react';
import { Container, Checkbox } from 'semantic-ui-react'

const ShoppingList = (props) => {

  const ingList = () => {
    if (props.ingredients) {
      this.props.ingredients.map(i => {
        console.log(i)
        return (
          <Container>
            <li style={{listStyle: 'none'}}><Checkbox onChange={props.handleChecked} value={i} control='input' type='checkbox' /> {i}</li>
          </Container>
        );
      });
    }
  }

  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {ingList()}
      </ul>
    </div>
  );
}
export default ShoppingList