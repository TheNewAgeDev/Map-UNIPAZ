import { map, L } from './leaflet'

import { getConfigStorage } from './storage'

import './select'
import { onEachFeature } from './info'
import { styleDefault } from './categories'
import { UNIPAZ_LOCATIONS } from './geoJson/unipaz'

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

export const MARK_LOCATIONS = {
  InformaciónUnipaz: UNIPAZ,
  Retorno: RETORNO
}
