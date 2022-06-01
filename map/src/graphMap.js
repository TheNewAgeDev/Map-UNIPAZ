/* eslint-disable array-element-newline */
import { map, L, CENTER } from '@/leaflet'

import { getConfigStorage, setConfigStorage } from '@/storage'

import '@/select'
import { info, onEachFeature } from '@/info'
import { styleDefault, CATEGORIES } from '@/categories'
import { UNIPAZ_CATEGORIES } from '@/geoJson/unipaz'
import { isMobileNow, useImage } from '@/util'

import '#/customPlugins/legend'

const configStorage = getConfigStorage()

/* CONFIGURACIÓN a tipica del Retorno */

const HTML_RETORNO = `
  <div class="content-popup-delimits">
    <h3 class="title-popup" style="margin:0;">Retorno a la Universidad</h3>
    ${useImage('Retorno', 'retorno.jpg')}
    <p>El retorno es la vía que deben tomar todas las personas que quieran ingresar a la universidad si vienen desde Barrancabermeja, la invitación que hace el instituto universitario de la paz, es ir hasta el retorno para poder ingresar correctamente a la institución, y no poner en riesgo la vida de nadie.</p>
  </div>
`

const RETORNO = L.marker([7.071283672458979, -73.73667776584625]).bindPopup(HTML_RETORNO)

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

/* Configuracíón y Creación de las delimitaciónes */

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

Object.entries(UNIPAZ_CATEGORIES).forEach(async ([key, value]) => {
  const category = CATEGORIES[key]

  const DELIMIT_CATEGORY = L.geoJSON(value, {
    onEachFeature,
    style: styleDefault
  }).addTo(map)

  DELIMIT_CATEGORY.on('add', () => {
    map.flyTo(DELIMIT_CATEGORY.getBounds().getCenter(), 18)
  })

  DELIMIT_CATEGORY.on('remove', () => {
    DELIMIT_CATEGORY.remove()
  })

  const newCategory = {
    label: category.name,
    type: 'rectangle',
    radius: 5,
    color: '#000',
    fillColor: category.fillColor,
    fillOpacity: 0.6,
    weight: 2,
    layers: DELIMIT_CATEGORY
  }

  CATEGORY_LEGEND.push(newCategory)
})

function toggleCategories (noToggle = false) {
  const config = getConfigStorage()
  let showInfo = config?.showInfo
  if (!noToggle) showInfo = !showInfo

  DEFAULT_LEGENDS[0].inactive = !showInfo
  DEFAULT_LEGENDS[1].inactive = !config?.retorno

  CATEGORY_LEGEND.forEach(category => {
    category.inactive = !showInfo
    showInfo ? category.layers.addTo(map) : category.layers.remove()
  })

  legend.setLegends(showInfo
    ? [
        ...DEFAULT_LEGENDS,
        ...CATEGORY_LEGEND
      ]
    : DEFAULT_LEGENDS)

  if (showInfo) {
    if (!isMobileNow) info.addTo(map)
  } else {
    info.remove()
  }

  if (!noToggle) {
    setConfigStorage({ showInfo })
    showInfo && map.flyTo(CENTER, 17)
  }
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
