class Gifs {
  constructor(query){
    this.query = query
    this.url = 'http://api.giphy.com/v1/gifs/search'
    this.key = '&api_key=dc6zaTOxFJmzC'
  }

  get() {
    const url = `${this.url}?q=${this.query}${this.key}`
    console.log('Firing ajax request for ' + this.query)
    return $.ajax({
      url: url
    })
  }
}
