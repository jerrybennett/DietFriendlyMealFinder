import React from 'react'
import lodash from 'lodash'
import { Container, Grid, Image, Visibility } from 'semantic-ui-react'
import RecipeItem from './RecipeItem'
import Recipe from './Recipe'
import Search from './Search'
// import ShoppingList from './ShoppingList'

const API_ID = `8379c306`
const API_KEY = `
6bd319c2daf886afd64b5a70e9d55e1f`

// const metaDATA =  `http://api.yummly.com/v1/api/metadata/ingredient?_app_id=${'8379c306'}&_app_key=${'6bd319c2daf886afd64b5a70e9d55e1f'}`

export default class RecipeContainer extends React.Component {

  state = {
    recipes: [],
    currentRecipe:[],
    query: 'chocolate',
    showDetail: true,
    allergies: []
  }

  componentDidMount(){
    this.getRecipe()
  }

  searchTerm = () => {
    let sT = `http://api.yummly.com/v1/api/recipes?_app_id=${API_ID}&_app_key=${API_KEY}&q=${this.state.query}&maxResult=10&start=10&requirePictures=true`

    if(this.state.allergies) {
      this.state.allergies.forEach(allergy => {
        sT += `&allowedAllergy=${allergy}`
      })
      return sT
    }
  }

  getRecipe = () => {
    fetch(this.searchTerm()).then(res => res.json())
    .then(res => res.matches.forEach(recipe => fetch(`http://api.yummly.com/v1/api/recipe/${recipe.id}?_app_id=${API_ID}&_app_key=${API_KEY}`)
      .then(res => res.json())
      .then(json => this.setState({
        recipes: [...this.state.recipes, json]
      }))))
  }

  handleClick = (recipe) =>
  fetch(`http://localhost:3000/api/v1/recipes`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: recipe.name,
        attribution: recipe.attribution.html,
        source: recipe.source.sourceDisplayName,
        rating: recipe.rating,
        total_time: recipe.totalTime,
        image_url:recipe.images[0].hostedLargeUrl,
        ingredients:recipe.ingredientLines
      })
  }).then(res => res.json()).then(res => this.setState({currentRecipe: res}))

  handleQuery = (e) => {
    this.setState({query: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      recipes: [],
      currentRecipe:[]
    })
    this.getRecipe()
    // console.log('submitted!')
  }

  handleChecked = (allergy) => {
    if (this.state.allergies.includes(allergy)){
      let arr = this.state.allergies
      let index = arr.indexOf(allergy)
      arr.splice(index, 1);
      this.setState({allergies: arr }, () => console.log(this.state.allergies));
    } else {
      this.setState({
        allergies: [...this.state.allergies, allergy]
      }, () => console.log(this.state.allergies))
    }
  }

  render() {
    console.log(this.state.recipes)
    console.log(this.state.currentRecipe)
    console.log(this.state.query)
    // console.log(this.state.allergies)

    return (
      <Container>
        <Search handleChecked={this.handleChecked} allergy={this.state.allergies} handleSubmit={this.handleSubmit} handleQuery={this.handleQuery} query={this.state.query} />
        {/* <ShoppingList recipe={this.state.currentRecipe}/> */}
        <Recipe recipe={this.state.currentRecipe}/>
        <Grid doubling columns={5}>
          {this.state.recipes.map(recipe =>
            <Grid.Column>
              <RecipeItem handleClick={this.handleClick} recipe={recipe} />
            </Grid.Column>)
          }
        </Grid>
      </Container>
    );
  }
}
