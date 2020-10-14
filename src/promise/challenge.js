const fetchDate = require("../utils/fetchData");
const API = "https://rickandmortyapi.com/api/character/";

fetchDate(API)
  .then(data => {
    console.log(data.info.count)
    return fetchDate(`${API}${data.results[0].id}`)
  })
  .then(data => {
    console.log(data.name)
    return fetchDate(data.origin.url)
  })
  .then(data => {
    console.log(data.dimension)
  })
  .catch(err => {
    console.log(err)
  })