// https://pokeapi.co/
function pokemon(){
  const name = "ditto"
  const content = UrlFetchApp.fetch("https://pokeapi.co/api/v2/pokemon/"+name).toString()
  console.log(JSON.parse(content))
}

// https://dog.ceo/dog-api/
function dog(){
  const content = UrlFetchApp.fetch("https://dog.ceo/api/breeds/image/random").toString()
  console.log(JSON.parse(content))
}

// https://api.adviceslip.com/#endpoint-random
function advice(){
  const content = UrlFetchApp.fetch("https://api.adviceslip.com/advice").toString()
  console.log(JSON.parse(content))
}