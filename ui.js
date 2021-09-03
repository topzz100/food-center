// const inputValue = document.querySelector('.input-text');
// const content = document.querySelector('.content')

class UI{
  constructor(){
    
  }
  addToContent(meals){
    let output = '';
    let mealOutput = meals.map(meal => {
     return  output += `
      <article class="single-meal">
      <div class="food-img">
        <img src="${meal.strMealThumb}" alt="">
      </div>
      <h4 class="name">${meal.strMeal}</h4>
      <a href="#description">see recipe</a>
    </article>
      `
    });
     mealOutput = mealOutput.join("");
    return mealOutput

  }
}