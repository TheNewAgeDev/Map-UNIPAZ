import './styles/main.css'

const load = document.createElement('div')
load.classList.add('loader')
load.innerHTML = '<div class="load"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>'

document.getElementById('map').appendChild(load)

window.onload = async () => {
  await import('./layers')
  document.getElementById('map').removeChild(load)
}
