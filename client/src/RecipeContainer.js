import React from 'react'
import lodash from 'lodash'
import { Container, Grid, Image, Visibility } from 'semantic-ui-react'
import RecipeItem from './RecipeItem'
import Recipe from './Recipe'
import Search from './Search'
import NavBar from './NavBar'

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
    allergies: [],
    diet: [],
    myRecipes: [],
    allergyOptions: [
      { key: '394^Peanut-Free', value: '394^Peanut-Free', text: 'Peanut' },
      { key: '397^Egg-Free', value: '397^Egg-Free', text: 'Eggs' },
      { key: '395^Tree Nut-Free', value: '395^Tree Nut-Free', text: 'Tree Nuts' },
      { key: '398^Seafood-Free', value: '398^Seafood-Free', text: 'Seafood' },
      { key: '393^Gluten-Free', value: '393^Gluten-Free', text: 'Gluten' },
      { key: '392^Wheat-Free', value: '392^Wheat-Free', text: 'Wheat' },
      { key: '400^Soy-Free', value: '400^Soy-Free', text: 'Soy' }
    ],
    dietOptions: [
      { key: '388^Lacto vegetarian', value: '388^Lacto vegetarian', text: 'Lact Vegetarian' },
      { key: '389^Ovo vegetarian', value: '389^Ovo vegetarian', text: 'Ovo Vegetarian' },
      { key: '387^Lacto-ovo vegetarian', value: '387^Lacto-ovo vegetarian', text: 'Lacto-Ovo Vegetarian' },
      { key: '386^Vegan', value: '386^Vegan', text: 'Vegan' },
      { key: '390^Pescetarian', value: '390^Pescetarian', text: 'Pescetarian' },
      { key: '403^Paleo', value: '403^Paleo', text: 'Paleo' }
    ]
  }

  componentDidMount(){
    this.getRecipe()
  }

  handleAllergy = (e, {value}) => this.setState({allergies: value})

  handleDiet = (e, {value}) => this.setState({diet: value})

  searchTerm = () => {
    let sT = `http://api.yummly.com/v1/api/recipes?_app_id=${API_ID}&_app_key=${API_KEY}&q=${this.state.query}&maxResult=10&start=10&requirePictures=true`

    if(this.state.allergies) {
      this.state.allergies.forEach(allergy => {
        sT += `&allowedAllergy=${allergy}`
      })
    }
    if(this.state.diet) {
      this.state.diet.forEach(d => {
        sT += `&allowedDiet=${d}`
      })
    }
    return sT
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

  handleAddToMyList = (recipe) => {
    console.log(recipe)
    console.log(this.state.myRecipes)
    if(this.state.myRecipes.includes(!recipe.id)){
    this.setState({
      myRecipes: [...this.state.myRecipes, recipe]
    })
  }
  }

  // getIngredients = () => {
  //   fetch(`http://api.yummly.com/v1/api/metadata/ingredient?_app_id=8379c306&_app_key=6bd319c2daf886afd64b5a70e9d55e1f`).then(res => res.json()).then(console.log)
  // }

  render() {
    // console.log(this.state.recipes)
    // console.log(this.state.currentRecipe)
    // console.log(this.state.query)
    console.log(this.state.allergies)
    console.log(this.state.diet)

    return (
      <Container>
        {/* <NavBar /> */}
        <Search
          // handleChecked={this.handleChecked}
          allergy={this.state.allergies}
          diet={this.state.diet}
          handleSubmit={this.handleSubmit}
          handleQuery={this.handleQuery}
          query={this.state.query}
          handleAllergy={this.handleAllergy}
          allergyOptions={this.state.allergyOptions}
          handleDiet={this.handleDiet}
          dietOptions={this.state.dietOptions}
        />
        <Recipe handleAddToMyList={this.handleAddToMyList} recipe={this.state.currentRecipe}/>
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
