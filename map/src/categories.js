export const CATEGORIES = {
  DEFAULT: {
    name: 'No Especificadas',

    color: '#17202A',
    hoverColor: '#17202A',
    fillColor: '#F5B041',
    hoverFillColor: '#eba96f',
    opacity: 0.5,
    hoverOpacity: 0.7
  },
  AULA: {
    name: 'Aulas',

    color: '#17202A',
    hoverColor: '#17202A',
    fillColor: '#E3F469',
    hoverFillColor: '#C4D25D',
    opacity: 0.5,
    hoverOpacity: 0.7
  },
  PARQUEADERO: {
    name: 'Parqueaderos',

    color: '#17202A',
    hoverColor: '#17202A',
    fillColor: '#F69D5F',
    hoverFillColor: '#E29D6D',
    opacity: 0.5,
    hoverOpacity: 0.7
  },
  LABORATORIO: {
    name: 'Laboratorios',

    color: '#17202A',
    hoverColor: '#17202A',
    fillColor: '#6DE2D0',
    hoverFillColor: '#53B0A1',
    opacity: 0.5,
    hoverOpacity: 0.7
  },
  RECREACION: {
    name: 'Recreación',

    color: '#17202A',
    hoverColor: '#17202A',
    fillColor: '#87DF6A',
    hoverFillColor: '#87DF6A',
    opacity: 0.5,
    hoverOpacity: 0.7
  },
  INFRAESTRUCTURA: {
    name: 'Infraestructuras',

    color: '#17202A',
    hoverColor: '#17202A',
    fillColor: '#cea46f',
    hoverFillColor: '#eba96f',
    opacity: 0.6,
    hoverOpacity: 0.7,
    weight: 3
  },
  CAFETERIA: {
    name: 'Cafeterías',

    color: '#17202A',
    hoverColor: '#17202A',
    fillColor: '#8c5e6f',
    hoverFillColor: '#8c5e99',
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
    weight: category.weight || 2,
    fillColor: category.hoverFillColor,
    color: category.hoverColor,
    dashArray: '3',
    opacity: category.hoverOpacity
  })

  info?.update(properties)
}

export async function resetStyleHover (e) {
  const { info } = await import('./info')

  const layer = e.target
  const properties = layer.feature.properties

  const category = CATEGORIES[properties.category.toUpperCase()] || CATEGORIES.DEFAULT

  layer.setStyle({
    fillColor: category.fillColor,
    fillOpacity: 0.6,
    weight: category.weight || 2,
    opacity: category.opacity,
    color: category.color,
    dashArray: '3'
  })

  info?.update()
}

export const styleDefault = (feature) => {
  const category = CATEGORIES[feature.properties.category.toUpperCase()] || CATEGORIES.DEFAULT

  return {
    fillColor: category.fillColor,
    fillOpacity: 0.6,
    weight: category.weight || 2,
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
    color: '#3882ff',
    opacity: 0.7
  }
}
