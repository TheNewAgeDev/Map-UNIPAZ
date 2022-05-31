/* eslint-disable no-return-assign */
import { map, L } from '@/leaflet'
import { resetStyleHover, styleHover } from '@/categories'

import { getConfigStorage } from '@/storage'
import { isMobileNow } from '@/util'

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

if (!isMobileNow) getConfigStorage()?.showInfo && info.addTo(map)

/* Muestra la Información Desplegada */

function zoomToFeature (e) {
  map.fitBounds(e.target.getBounds())
}

const getMessage = (properties) => {
  const { name, category } = properties
  let { html } = properties
  if (typeof html === 'function') html = html()

  const mapObj = {
    '{{ title }}': name,
    '{{ category }}': category
  }

  return html.replace(/{{ title }}|{{ category }}/gi, function (matched) {
    return mapObj[matched]
  })
}

export const sidebar = L.control.sidebar('sidebar', {
  position: 'left'
}).addTo(map)

export const onEachFeature = async (feature, layer) => {
  layer.on({
    mouseover: styleHover,
    mouseout: resetStyleHover,
    click: zoomToFeature
  })

  const message = feature.properties.html
    ? getMessage(feature.properties)
    : `<strong>Edificio</strong>: ${feature.properties.name}`

  layer.on('click', async ({ isSelect }) => {
    const { waitFor } = await import('./util')

    sidebar.setContent(message)

    if (!sidebar.isVisible() && isSelect) await waitFor(500)
    sidebar.show()
  })
}
