import React from 'react';
import { Container, Rating, Checkbox, Button, Icon } from 'semantic-ui-react'
import ShoppingList from './ShoppingList'

export default class Recipe extends React.Component {

  state = {
    ingredients: []
  }

  handleAdd = (e) => {
    let food = e.target.parentNode.parentNode.innerText
    if(!this.state.ingredients.includes(food))
    this.setState({
      ingredients: [...this.state.ingredients, food]
    }, () => console.log(this.state.ingredients))
  }

  handleRemove = (e) => {
    let food = e.target.parentNode.parentNode.innerText
    let arr = this.state.ingredients
    let index = arr.indexOf(food)
    arr.splice(index, 1);
    this.setState({ingredients: arr }, () => console.log(this.state.ingredients));
  }

  handleDo = () => this.props.handleAddToMyList(this.props.recipe)

  displayRecipe = (props) => {
    const recipe = this.props.recipe
    if(recipe.length !== 0) {
      return (
        <Container className='recipe' textAlign='left'>
          <h2>{recipe.title}</h2>
          <ul>
            {recipe.ingredients.map(i =>
              <Container>
                <li className='inList' value={i.name} style={{listStyle: 'none'}}>
                  <Button onClick={this.handleAdd} icon>
                    <Icon name='plus' />
                  </Button>
                  {i.name}
                </li>
              </Container>)}
          </ul>
          {/* <Button onClick={this.handleDo} icon>
            <Icon name='plus' />
            Add to My List
          </Button> */}
          <Rating
            disabled
            icon='star'
            defaultRating={recipe.rating}
            maxRating={5}
          />
          <p>{recipe.source}</p>
          <div dangerouslySetInnerHTML={{__html: recipe.attribution}} />
        </Container>
      )
    }
  }
  render(){
    return (
      <div className='recipeCont'>
        <ShoppingList
          addIngredient={this.addIngredient} handleRemove={this.handleRemove} ingredients={this.state.ingredients}
        />
        {this.displayRecipe()}
      </div>
    );
  }
}
