$(document).ready(function(){
  console.log('Document ready!')


  const $gifList = $('ul#gifs')
  const $form = $('form#gif-search')

  $form.on('submit', fetchAndRenderGifs)

  function fetchAndRenderGifs(e){
    e.preventDefault()
    console.log('Form submitted!!')
    const $input = $('input#query')
    const gifAdapter = new Gifs($input.val())

    gifAdapter.get()
      .then(renderGifs)
  }

  function renderGifs (data) {
    console.log('response received!')
    console.log(data.data.length)
    const gifListItems = []

    for(var i = 0; i < 5; i ++) {
      var gif = data.data[i]
      gifListItems.push(`<li><video width="400" controls><source src="${gif.images.looping.mp4}"></video></li>`)
    }
    // const gifListItems = data.data.map(function(gif) {
    //   return `<li><video width="400" controls><source src="${gif.images.looping.mp4}"></video></li>`
    // })

    $gifList.html(gifListItems.join(''))
  }

})
