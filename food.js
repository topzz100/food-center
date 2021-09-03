
class Food {
  constructor(){
    
  }

  get = async (value) => {
   
    const response =  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)

    const data = await response.json()
    return data
  }

}

