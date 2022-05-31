import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'

import * as Lft from 'leaflet'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility'

import 'leaflet-sidebar/src/L.Control.Sidebar'
import 'leaflet-sidebar/src/L.Control.Sidebar.css'

import '@/styles/leaflet-custom.css'

export const CENTER = [7.06819, -73.74513] // Centro de UNIPAZ
const BOUNDS = [
  // south west         // north east
  [7.05492, -73.75344], [7.07401, -73.73359]
]

const CONFIG_LEAFLET = {
  center: CENTER,
  zoom: 18,
  minZoom: 16,
  attributionControl: true,
  maxBounds: BOUNDS
}

export const map = Lft.map('map', CONFIG_LEAFLET).setView(CENTER) // Se crea el mapa
export const L = Lft // Se exporta el objeto Leaflet
