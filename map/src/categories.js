const CATEGORIES = {
  DEFAULT: {
    name: 'Default',

    color: 'white',
    hoverColor: '#17202A',
    fillColor: '#87DF6A',
    hoverFillColor: '#87DF6A',
    opacity: 0.5,
    hoverOpacity: 0.7
  },
  AULAS: {
    name: 'Aulas',

    color: 'white',
    hoverColor: '#17202A',
    fillColor: '#E3F469',
    hoverFillColor: '#C4D25D',
    opacity: 0.5,
    hoverOpacity: 0.7
  },
  PARQUEADERO: {
    name: 'Parqueadero',

    color: 'white',
    hoverColor: '#17202A',
    fillColor: '#F69D5F',
    hoverFillColor: '#E29D6D',
    opacity: 0.5,
    hoverOpacity: 0.7
  },
  LABORATORIO: {
    name: 'Laboratorio',

    color: 'white',
    hoverColor: '#17202A',
    fillColor: '#6DE2D0',
    hoverFillColor: '#53B0A1',
    opacity: 0.5,
    hoverOpacity: 0.7
  },
  CANCHA: {
    name: 'Cancha',

    color: 'white',
    hoverColor: '#17202A',
    fillColor: '#F6D0A9',
    hoverFillColor: '#E3B890',
    opacity: 0.5,
    hoverOpacity: 0.7
  }
}

export async function styleHover (e) {
  const { info } = await import('./info')

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

export async function resetStyleHover (e) {
  const { info } = await import('./info')
  const { UNIPAZ } = await import('./graphMap')

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

export const selectStyle = (feature) => {
  const category = CATEGORIES[feature.properties.category.toUpperCase()] || CATEGORIES.DEFAULT

  return {
    fillColor: category.fillColor,
    weight: 4,
    color: '#2874A6'
  }
}
