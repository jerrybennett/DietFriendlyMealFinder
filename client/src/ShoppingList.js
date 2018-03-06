import React from 'react';
import { Container, Checkbox, Button, Icon } from 'semantic-ui-react'

const ShoppingList = (props) => {

  const ingList = () => {
    if (props.ingredients.length > 0) {
      return props.ingredients.map(i =>
          <Container textAlign='left'>
            <li style={{listStyle: 'none'}}>
              <Button onClick={props.handleRemove} icon>
                <Icon name='in cart' />
              </Button>
              {i}</li>
          </Container>

      );
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
