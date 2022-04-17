/* eslint-disable quote-props */
import { map, L } from './leaflet'

import { getConfigStorage, setConfigStorage } from './storage'
import { MARK_LOCATIONS } from './graphMap'

const DEFAULT_LAYER = getConfigStorage()?.defaultLayer || 'Por Defecto'

export const LAYERS = {
  'Por Defecto': {
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    id: 'default',
    icon: '/images/viewDefaultMode.png'
  },
  'Dark Mode': {
    url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
    id: 'dark',
    icon: '/images/viewDarkMode.png'
  },
  'Satelital': {
    url: 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
    id: 'mapbox/satellite-v9',
    icon: '/images/viewSatelitalMode.png',
    token: import.meta.env.VITE_MAPBOXTOKEN
  }
}

const ATTRIBUTION = '© <a target="_blank" href="https://map-unipaz.surge.sh/">Mapa Unipaz</a>'

/* Creación de las Capas */

const LAYERS_DEFINE = []

Object.entries(LAYERS).forEach(([key, value]) => {
  const SETTINGS = {
    id: value.id || '',
    accessToken: value.token || '',
    subdomains: value.subdomains || 'abc',
    attribution: ATTRIBUTION
  }

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

L.basemapsSwitcher(LAYERS_DEFINE, {
  position: 'bottomright'
}).addTo(map)

map.on('baselayerchange', (e) => {
  setConfigStorage({ defaultLayer: e.name })
})
