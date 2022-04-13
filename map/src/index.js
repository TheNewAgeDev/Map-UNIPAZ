document.getElementById('map').innerHTML = 'Cargando...'

window.onload = async () => {
  await import('./layers')
}
