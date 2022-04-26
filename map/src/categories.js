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
