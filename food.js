class Food {
  constructor(){
    
  }

  get = async (name) => {
    // let searchInputTxt = 'chicken breast';
    const response =  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)

    const data = await response.json()
    console.log(data.meals[0].strInstructions)
  }

}
// function get(){
//   fetch('www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
  
  
//   .then(response => 
//     response.json())
//   .then(data => console.log(data))
// }

//   let searchInputTxt = 'chicken breast';
//   fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//   })
// }

const food = new Food

food.get('sandwich')