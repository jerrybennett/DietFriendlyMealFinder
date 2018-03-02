import React from 'react';

const API_ID = `8379c306`
const API_KEY = `
6bd319c2daf886afd64b5a70e9d55e1f`

const SEARCH = `http://api.yummly.com/v1/api/recipe/${"Caramelized-Tofu-2246400"}?_app_id=${API_ID}&_app_key=${API_KEY}`
// Caramelized-Tofu-2246400
export default class Button extends React.Component {

  getRecipe = () => fetch(SEARCH).then(res => res.json()).then(res => fetch(`http://localhost:3000/api/v1/recipes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          title: res.name,
          attribution: res.attribution.html,
          source: res.source.sourceRecipeUrl,
          rating: res.rating,
          total_time: res.totalTime,
          image_url: res.images[0].hostedLargeUrl,
          ingredients: res.ingredientLines
        })
      })
      .then(res => res.json()))

  render() {
    return (
      <div>
        <button onClick={this.getRecipe}>Fetch!</button>
      </div>
    );
  }
}


// .then(res => fetch(`http://localhost:3000/api/v1/recipes`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//         },
//         body: JSON.stringify({
//           title: res.name
//         })
//       })
//       .then(res => res.json())).then(console.log)
