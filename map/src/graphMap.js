import { map, L } from './leaflet'

import { getConfigStorage } from './storage'

import './select'
import { onEachFeature } from './info'
import { styleDefault } from './categories'
import { UNIPAZ_LOCATIONS } from './geoJson/unipaz'

import '../customPlugins/leyend'

const configStorage = getConfigStorage()

const RETORNO = L.marker([7.071283672458979, -73.73667776584625])
  .bindPopup('Retorno a la Universidad')

let isFirtsTime = true
RETORNO.on('add', () => {
  if (configStorage?.retorno) {
    if (!isFirtsTime) map.flyTo(RETORNO.getLatLng(), 18)
  } else {
    map.flyTo(RETORNO.getLatLng(), 18)
    RETORNO.fire('click')
  }
  isFirtsTime = false
})

export const UNIPAZ = L.geoJson(UNIPAZ_LOCATIONS, {
  onEachFeature,
  style: styleDefault
})

configStorage?.retorno && RETORNO.addTo(map)
configStorage?.showInfo && UNIPAZ.addTo(map)

export const legend = L.control.Legend({
  position: 'bottomleft',
  collapsed: false,
  symbolWidth: 24,
  opacity: 1,
  column: 1,
  legends: [
    {
      label: 'Información Unipaz',
      type: 'rectangle',
      radius: 6,
      color: 'red',
      fillColor: '#33FF6B',
      fillOpacity: 0.6,
      weight: 2,
      layers: UNIPAZ,
      inactive: false
    }, {
      label: 'Retorno a UNIPAZ',
      type: 'rectangle',
      radius: 6,
      color: 'red',
      fillColor: '#33FF6B',
      fillOpacity: 0.6,
      weight: 2,
      layers: RETORNO,
      inactive: true
    }
  ]
}).addTo(map)
