/* eslint-disable array-element-newline */
import { map, L } from './leaflet'

import { getConfigStorage, setConfigStorage } from './storage'

import './select'
import { onEachFeature } from './info'
import { styleDefault, CATEGORIES } from './categories'
import { UNIPAZ_CATEGORIES } from './geoJson/unipaz'
import { capitalizeString, isMobileNow } from './util'

import '../customPlugins/leyend'

const configStorage = getConfigStorage()

const RETORNO = L.marker([7.071283672458979, -73.73667776584625])
  .bindPopup('Retorno a la Universidad')

let isFirtsTime = true
RETORNO.on('add', () => {
  if (isFirtsTime) {
    isFirtsTime = false
    if (configStorage?.retorno) return
  }

  map.flyTo(RETORNO.getLatLng(), 18)
  RETORNO.fire('click')
  setConfigStorage({ retorno: true })
})

RETORNO.on('remove', () => {
  setConfigStorage({ retorno: false })
})

configStorage?.retorno && RETORNO.addTo(map)

const CATEGORY_LEGEND = []
const DEFAULT_LEGENDS = [{
  label: 'Información',
  type: 'circle',
  radius: 5,
  color: '#000',
  fillColor: '#000',
  fillOpacity: 0.6,
  weight: 2,
  exec: toggleCategories
},
{
  label: 'Retorno',
  type: 'circle',
  radius: 5,
  color: '#000',
  fillColor: '#000',
  fillOpacity: 0.6,
  weight: 2,
  layers: RETORNO
}]

Object.entries(UNIPAZ_CATEGORIES).forEach(([key, value]) => {
  const category = CATEGORIES[key]
  if (key === 'DEFAULT') key = 'No Especificada'

  const DELIMIT_CATEGORY = L.geoJson(value, {
    onEachFeature,
    style: styleDefault
  }).addTo(map)

  DELIMIT_CATEGORY.on('add', () => {
    map.flyTo(DELIMIT_CATEGORY.getBounds().getCenter(), 18)
  })

  const newCategory = {
    label: capitalizeString(`${key}s`),
    type: 'rectangle',
    radius: 5,
    color: '#000',
    fillColor: category.fillColor,
    fillOpacity: 0.6,
    weight: 2,
    layers: DELIMIT_CATEGORY,
    inactive: false
  }

  CATEGORY_LEGEND.push(newCategory)
})

function toggleCategories (noToggle = false) {
  const config = getConfigStorage()
  let showInfo = config?.showInfo
  if (!noToggle) showInfo = !showInfo

  DEFAULT_LEGENDS[0].inactive = !showInfo
  DEFAULT_LEGENDS[1].inactive = !config?.retorno

  legend.setLegends(showInfo
    ? [
        ...DEFAULT_LEGENDS,
        ...CATEGORY_LEGEND
      ]
    : DEFAULT_LEGENDS)

  if (!noToggle) setConfigStorage({ showInfo })
}

const legend = L.control.Legend({
  title: 'Categorías',
  position: 'bottomleft',
  collapsed: !!isMobileNow,
  symbolWidth: 24,
  opacity: 0.2,
  column: 2
}).addTo(map)

toggleCategories(true)
