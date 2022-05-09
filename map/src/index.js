import './styles/main.css'

const map = document.getElementById('map')

const load = document.createElement('div')
load.classList.add('loader')
load.innerHTML = '<div class="load"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>'

map.appendChild(load)

const sidebar = document.createElement('div')
sidebar.id = 'sidebar'

window.onload = async () => {
  map.appendChild(sidebar)

  await import('./layers')

  map.removeChild(load)
}
