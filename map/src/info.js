/* eslint-disable no-return-assign */
import { map, L } from './leaflet'
import { resetStyleHover, styleHover } from './categories'

import { getConfigStorage, setConfigStorage } from './storage'

/* Muestra la Información como Hover */

export const info = L.control()

info.onAdd = function (map) {
  this._div = L.DomUtil.create('div', 'info')
  this.update()
  return this._div
}

info.update = function (props) {
  if (!this._div) return
  const showMessage = '<h4>UNIPAZ - Información</h4>'

  if (!props) return this._div.innerHTML = `${showMessage} <small class="center"><i>Pasa el cursor sobre un lugar</i></small>`

  const { name } = props
  this._div.innerHTML = `
    ${showMessage}
    <strong>Edificio: </strong>${name}<br>
    <small class="center"><i>Click para saber más</i></small>
  `
}

getConfigStorage()?.showInfo && info.addTo(map)

map.on('overlayadd', function (eo) {
  if (eo.name === 'InformaciónUnipaz') {
    info.addTo(map)
    setConfigStorage({ showInfo: true })
  }
  if (eo.name === 'Retorno') setConfigStorage({ retorno: true })
})

map.on('overlayremove', function (eo) {
  if (eo.name === 'InformaciónUnipaz') {
    info.remove()
    setConfigStorage({ showInfo: false })
  }
  if (eo.name === 'Retorno') setConfigStorage({ retorno: false })
})

/* Muestra la Información Desplegada */

function zoomToFeature (e) {
  map.fitBounds(e.target.getBounds())
}

const getMessage = (properties) => {
  const { name, categorie, html } = properties

  const mapObj = {
    '{{ title }}': name,
    '{{ categorie }}': categorie
  }

  return html.replace(/{{ title }}|{{ categorie }}/gi, function (matched) {
    return mapObj[matched]
  })
}

export const onEachFeature = (feature, layer) => {
  layer.on({
    mouseover: styleHover,
    mouseout: resetStyleHover,
    click: zoomToFeature
  })

  const message = feature.properties.html
    ? getMessage(feature.properties)
    : `<strong>Edificio</strong>: ${feature.properties.name}`

  layer.bindPopup(message)
}
