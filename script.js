const button = document.querySelector('button')
const h1 = document.querySelector('h1')
const image = document.querySelector('img')
const span = document.querySelector('span')
button.addEventListener('click',()=>{
  fetch('https://meme-api.com/gimme').then((response) => response.json()).then((data)=>{h1.innerText=data.title
  image.src=data.url
  span.innerText = data.author})
  
})