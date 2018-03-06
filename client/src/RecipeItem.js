import React from 'react';
import { Image, Card, Rating, Icon } from 'semantic-ui-react'

const RecipeItem = (props) => {
  const clickCard = () => {
    props.handleClick(props.recipe)
  }
  return (
    <Card onClick={clickCard} recipe={props.recipe}>
      <Image src={props.recipe.images[0].hostedLargeUrl}/>
      <Card.Content>
        <Card.Header>
          {props.recipe.name}
        </Card.Header>
        <Card.Description>
          <Rating icon='star' defaultRating={props.recipe.rating} maxRating={5} />
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href={props.recipe.source.sourceRecipeUrl
        }>
          <Icon name='world' />
          {props.recipe.source.sourceDisplayName}
        </a>
      </Card.Content>
    </Card>
  );
}
export default RecipeItem
