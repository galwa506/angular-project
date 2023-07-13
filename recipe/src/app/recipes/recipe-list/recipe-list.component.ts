import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("A test Recipe", "This is simly a test", "https://www.seriouseats.com/thmb/MHMlz7l-gpIzTYPuP8Mqy7k2-u4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SEA-classic-panzanella-salad-recipe-hero-03-74d7b17dde8f498795387ef0c22d7215.jpg"),
    new Recipe("A test Recipe", "This is simly a test", "https://www.seriouseats.com/thmb/MHMlz7l-gpIzTYPuP8Mqy7k2-u4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SEA-classic-panzanella-salad-recipe-hero-03-74d7b17dde8f498795387ef0c22d7215.jpg")
    
  ];
  

  constructor(){

  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe)
  }
}
