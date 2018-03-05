import React from 'react';
import { Container, Rating, Checkbox } from 'semantic-ui-react'
import ShoppingList from './ShoppingList'

export default class Recipe extends React.Component {

  state = {
    ingredients: []
  }

  // addIngredient = (food, e) => {
    // console.log(e.target.parentNode.children[0].value)
    // if (this.state.ingredients.includes(food)){
    //   let arr = this.state.ingredients
    //   let index = arr.indexOf(food)
    //   arr.splice(index, 1);
    //   this.setState({ingredients: arr }, () => console.log(this.state.ingredients));
    //   e.target.parentNode.className = 'ui checked fitted checkbox'
    // } else {
    //   this.setState({
    //     ingredients: [...this.state.ingredients, food]
    //   }, () => console.log(this.state.ingredients))
    // }
  // }

  handleChecked = (e) => {
    let food = e.target.parentNode.children[0].value
    if (this.state.ingredients.includes(food)){
      let arr = this.state.ingredients
      let index = arr.indexOf(food)
      arr.splice(index, 1);
      this.setState({ingredients: arr }, () => console.log(this.state.ingredients));
      e.target.parentNode.className = 'ui checked fitted checkbox'
    } else {
      this.setState({
        ingredients: [...this.state.ingredients, food]
      }, () => console.log(this.state.ingredients))
    }
  }

  displayRecipe = (props) => {
    const recipe = this.props.recipe
    if(recipe.length !== 0) {
      return (
        <Container textAlign='left'>
          <h4>{recipe.title}</h4>
          <p>{recipe.source}</p>
          <ul>
            {recipe.ingredients.map(i => <Container><li style={{listStyle: 'none'}}><Checkbox onChange={this.handleChecked} value={i.name} control='input' type='checkbox' /> {i.name}</li></Container>)}
          </ul>
          <Rating disabled icon='star' defaultRating={recipe.rating} maxRating={5} />
          <div dangerouslySetInnerHTML={{__html: recipe.attribution}} />
        </Container>
      )
    }
  }
  render(){

    return (
      <div>
        <ShoppingList addIngredient={this.addIngredient} handleChecked={this.handleChecked} ingredients={this.state.ingredients}/>
        {this.displayRecipe()}
      </div>
    );
  }
}
