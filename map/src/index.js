import './styles/main.css'

const load = document.createElement('div')
load.innerHTML = 'Cargando...'

document.getElementById('map').appendChild(load)

window.onload = async () => {
  await import('./layers')
  document.getElementById('map').removeChild(load)
}
