import React, {Component} from 'react';
import RecipeList from '../components/recipeList'
import $ from 'jquery';

export default class RecipeListContainer extends Component{

  constructor() {
   super();

   this.state = {
     recipes: [],
     ingredientSearch: '',
     }

    // binding the this that is inside the current constructor to the this inside the selectCurrentHouse
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    this.setState({ingredientSearch: event.target.value});
    this.forceUpdate();
  }


  componentDidMount(){
   $.get('http://www.recipepuppy.com/api/?').then(response =>{
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
        <form >
         <label>
           Search Parameters:
           <input type="text" onChange={this.handleChange} />
           </label>
        </form>
         <RecipeList recipes={this.state.recipes}
         filter={this.state.ingredientSearch}/>
       </div>
      );
    }

}
