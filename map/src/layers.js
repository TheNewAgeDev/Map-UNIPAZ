/* eslint-disable quote-props */
import { map, L } from './leaflet'
import '../customPlugins/switchBasemap'

import { getConfigStorage, setConfigStorage } from './storage'
import { MARK_LOCATIONS } from './graphMap'

const DEFAULT_LAYER = getConfigStorage()?.defaultLayer || 'Por Defecto'
const EXCLUDE_LAYERS = ['Draw']
const EXCLUDE_SETTINGS = ['url', 'icon']

export const LAYERS = {
  'Por Defecto': {
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    icon: '/images/viewDefaultMode.png'
  },
  'Dark Mode': {
    url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key={api_key}',
    icon: '/images/viewDarkMode.png',
    api_key: import.meta.env.VITE_STADIATOKEN
  },
  'Satelital': {
    url: 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
    id: 'mapbox/satellite-v9',
    icon: '/images/viewSatelitalMode.png',
    accessToken: import.meta.env.VITE_MAPBOXTOKEN
  },
  'Draw': {
    url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
  }
}

const ATTRIBUTION = '© <a target="_blank" href="https://unimapz.surge.sh/">UNIMAPZ</a>'

/* Creación de las Capas */

const LAYERS_DEFINE = []

Object.entries(LAYERS).forEach(([key, value]) => {
  if (EXCLUDE_LAYERS.includes(key)) return

  const SETTINGS = {
    name: key,
    attribution: ATTRIBUTION
  }

  Object.entries(value).forEach(([key2, value2]) => {
    if (EXCLUDE_SETTINGS.includes(key2)) return
    SETTINGS[key2] = value2
  })

  const newLayer = L.tileLayer(value.url, SETTINGS)

  LAYERS_DEFINE.push({
    layer: newLayer,
    name: key,
    icon: value.icon || ''
  }) // Se guarda en el objeto de capas
})

LAYERS_DEFINE.find(layer => layer.name === DEFAULT_LAYER).layer.addTo(map)

L.control.layers(null, MARK_LOCATIONS, {
  position: 'bottomright',
  collapsed: false
}).addTo(map)

L.control.layers.minimap(LAYERS_DEFINE, {
  position: 'bottomright'
}).addTo(map)

map.on('layeradd', ({ layer }) => {
  setConfigStorage({ defaultLayer: layer.options.name })
})
