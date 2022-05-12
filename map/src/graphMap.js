import { map, L } from './leaflet'

import { getConfigStorage, setConfigStorage } from './storage'

import './select'
import { info, onEachFeature } from './info'
import { styleDefault } from './categories'
import { UNIPAZ_LOCATIONS } from './geoJson/unipaz'
import { isMobileNow } from './util'

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
  setConfigStorage({ retorno: true })
})

RETORNO.on('remove', () => {
  setConfigStorage({ retorno: false })
})

export const UNIPAZ = L.geoJson(UNIPAZ_LOCATIONS, {
  onEachFeature,
  style: styleDefault
})

UNIPAZ.on('add', () => {
  if (!isMobileNow) info.addTo(map)
  setConfigStorage({ showInfo: true })
})

UNIPAZ.on('remove', () => {
  info.remove()
  setConfigStorage({ showInfo: false })
})

configStorage?.retorno && RETORNO.addTo(map)
configStorage?.showInfo && UNIPAZ.addTo(map)

export const legend = L.control.Legend({
  title: 'Categorías',
  position: 'bottomleft',
  collapsed: false,
  symbolWidth: 24,
  opacity: 0.5,
  column: 1,
  legends: [
    {
      label: 'Información',
      type: 'circle',
      radius: 5,
      color: 'blue',
      fillColor: '#33F',
      fillOpacity: 0.6,
      weight: 2,
      layers: UNIPAZ,
      inactive: !configStorage?.retorno
    }, {
      label: 'Retorno',
      type: 'circle',
      radius: 5,
      color: 'blue',
      fillColor: '#33F',
      fillOpacity: 0.6,
      weight: 2,
      layers: RETORNO,
      inactive: !configStorage?.showInfo
    }
  ]
}).addTo(map)
