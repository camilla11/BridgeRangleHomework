import React, {Component} from 'react';
import RecipeList from '../components/recipeList'
import $ from 'jquery';

export default class RecipeListContainer extends Component{

  constructor() {
   super();

   this.state = {
     recipes: [],
     }
  //     this.selectCurrentHouse = this.selectCurrentHouse.bind(this);
    // binding the this that is inside the current constructor to the this inside the selectCurrentHouse
  }


  componentDidMount(){
   $.get('http://www.recipepuppy.com/api/?i=onions,garlic').then(response =>{
      let parsedResponse = $.parseJSON(response).results;
       console.log(parsedResponse);
       this.setState({
         recipes:parsedResponse
       });
     });
    }

    render() {
      // to pass from componentDidMount to here, we use component state
      return (
        <div>
          < RecipeList recipes={this.state.recipes}/>
         </div>
      );
    }

}
