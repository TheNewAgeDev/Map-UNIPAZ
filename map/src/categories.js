import { UNIPAZ } from './graphMap'
import { info } from './info'

const CATEGORIES = {
  DEFAULT: {
    color: 'white',
    hoverColor: '#17202A',
    fillColor: '#87DF6A',
    hoverFillColor: '#87DF6A',
    opacity: 0.5,
    hoverOpacity: 0.7
  },
  AULAS: {
    color: 'white',
    hoverColor: '#17202A',
    fillColor: '#E3F469',
    hoverFillColor: '#C4D25D',
    opacity: 0.5,
    hoverOpacity: 0.7
  },
  PARQUEADERO: {
    color: 'white',
    hoverColor: '#17202A',
    fillColor: '#F69D5F',
    hoverFillColor: '#E29D6D',
    opacity: 0.5,
    hoverOpacity: 0.7
  },
  LABORATORIO: {
    color: 'white',
    hoverColor: '#17202A',
    fillColor: '#6DE2D0',
    hoverFillColor: '#53B0A1',
    opacity: 0.5,
    hoverOpacity: 0.7
  },
  CANCHA: {
    color: 'white',
    hoverColor: '#17202A',
    fillColor: '#F6D0A9',
    hoverFillColor: '#E3B890',
    opacity: 0.5,
    hoverOpacity: 0.7
  }
}

export function styleHover (e) {
  const layer = e.target
  const properties = layer.feature.properties

  const category = CATEGORIES[properties.category.toUpperCase()] || CATEGORIES.DEFAULT

  layer.setStyle({
    weight: 2,
    fillColor: category.hoverFillColor,
    color: category.hoverColor,
    dashArray: '3',
    opacity: category.hoverOpacity
  })

  info?.update(properties)
}

export function resetStyleHover (e) {
  UNIPAZ.resetStyle(e.target)

  info?.update()
}

export const styleDefault = (feature) => {
  const category = CATEGORIES[feature.properties.category.toUpperCase()] || CATEGORIES.DEFAULT

  return {
    fillColor: category.fillColor,
    fillOpacity: 0.6,
    weight: 2,
    opacity: category.opacity,
    color: category.color,
    dashArray: '3'
  }
}
