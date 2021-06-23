import axios from "axios"

export default function(req, res, next) {
  const paths = ['/a']
  // A very simple check
  if (paths.includes(req.originalUrl)) {
    // Will trigger the "traditional SPA mode"
    res.spa = true
  }
  // Don't forget to call next in all cases!
  // Otherwise, your app will be stuck forever :|
  axios.get('https://pokeapi.co/api/v2/pokemon?limit=151').then(res => console.log(res.data.results))
  next()
}
