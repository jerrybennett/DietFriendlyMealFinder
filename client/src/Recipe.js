import React from 'react';
import { Container, Rating, Checkbox } from 'semantic-ui-react'
// import Rating from './Rating'

const Recipe = (props) => {
  const recipe = props.recipe
  const displayRecipe = () => {
    if(recipe.length !== 0) {
      return (
        <Container textAlign='left'>
          <h4>{recipe.title}</h4>
          <p>{recipe.source}</p>
          <ul>
            {recipe.ingredients.map(i => <Container><li style={{listStyle: 'none'}}>{i.name}</li></Container>)}
          </ul>
          <Rating disabled icon='star' defaultRating={recipe.rating} maxRating={5} />
          <div dangerouslySetInnerHTML={{__html: recipe.attribution}} />
        </Container>
      )
    }
  }
  return (
    <div>
      {displayRecipe()}
    </div>
  );
}

export default Recipe
