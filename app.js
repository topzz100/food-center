const food = new Food
const ui = new UI

const content = document.querySelector('.content')


searchBtn = document.querySelector('.search-btn');

// searchBtn.addEventListener('click', addMeals)
const inputValue = document.querySelector('.input-text')

const addMeals =() => {
  const text = inputValue.value;
  food.get(text).then(data => {
    content.innerHTML = ui.addToContent(data.meals)
  })
}


searchBtn.addEventListener('click', () => {
  console.log(inputValue.value)
  addMeals()
  // e.preventDefault()
})
  

  