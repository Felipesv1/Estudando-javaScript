
const elementos = [
    {tag:'h4',texto:'Os céus '},
    {tag:'h2',texto:'Declaram'},
    {tag:'h3',texto:'a gloria'},
    {tag:'h1',texto:'de Deus'},
]

const container = document.querySelector('.container')
const div = document.createElement('div')
const btnMobile = document.getElementById('btn-mobile')

for(let i = 0 ; i < elementos.length ; i++){
  let {tag,texto} = elementos[i]

  let tagCriada = document.createElement(tag)
  let textoCriado = document.createTextNode(texto)

  tagCriada.appendChild(textoCriado)
  div.appendChild(tagCriada)
}
container.appendChild(div)



function toggleMenu(ev){
    if(ev.type === 'touchstart')
    {
        ev.preventDefault()
    }
    const nav = document.getElementById('nav')
    const hamburguer = document.getElementById('hamburguer')

    console.log(nav)
    nav.classList.toggle('active')
    hamburguer.classList.toggle('active')
    const active = nav.classList.contains('active')
    ev.currentTarget.setAttribute('aria-expanded',active)
    if(active){
        ev.currentTarget.setAttribute('aria-label','fechar menu')
    }else{
        ev.currentTarget.setAttribute('aria-label','Abrir menu')
        
    }
}

btnMobile.addEventListener('click',toggleMenu)
