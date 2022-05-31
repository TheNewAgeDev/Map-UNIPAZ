export const CATEGORIES = {
  DEFAULT: {
    name: 'No Especificadas',

    color: '#17202A',
    hoverColor: '#17202A',
    fillColor: '#F5B041',
    hoverFillColor: '#F5A041',
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
    fillColor: '#F2806C',
    hoverFillColor: '#E75238',
    opacity: 0.5,
    hoverOpacity: 0.7
  },
  INFRAESTRUCTURA: {
    name: 'Infraestructuras',

    color: '#17202A',
    hoverColor: '#17202A',
    fillColor: '#cea46f',
    hoverFillColor: '#eba96f',
    opacity: 0.5,
    hoverOpacity: 0.7
  },
  CAFETERIA: {
    name: 'Cafeterías',

    color: '#17202A',
    hoverColor: '#17202A',
    fillColor: '#CF63E8',
    hoverFillColor: '#8c5e99',
    opacity: 0.5,
    hoverOpacity: 0.7
  },
  MVZ: {
    name: 'MVZ',

    color: '#17202A',
    hoverColor: '#17202A',
    fillColor: '#87DF6A',
    hoverFillColor: '#87D05A',
    opacity: 0.5,
    hoverOpacity: 0.7
  },
  ADMIN: {
    name: 'Administrativos',

    color: '#17202A',
    hoverColor: '#17202A',
    fillColor: '#63B9E8',
    hoverFillColor: '#42A4D9',
    opacity: 0.5,
    hoverOpacity: 0.7
  }
}

function getCategory (props) {
  return CATEGORIES[props.category?.toUpperCase()] || CATEGORIES.DEFAULT
}

function addStyleDefault (props) {
  const category = getCategory(props)

  return {
    fillColor: category.fillColor,
    fillOpacity: 0.6,
    weight: props.weight || category.weight || 2,
    opacity: props.opacity || category.opacity,
    color: props.color || category.color,
    dashArray: '3'
  }
}

export async function styleHover (e) {
  const { info } = await import('./info')

  const layer = e.target
  const props = layer.feature.properties
  const category = getCategory(props)

  layer.setStyle({
    weight: props.weight || category.weight || 2,
    fillColor: category.hoverFillColor,
    color: category.hoverColor,
    dashArray: '3',
    opacity: category.hoverOpacity
  })

  info?.update(props)
}

export async function resetStyleHover (e) {
  const { info } = await import('./info')

  const layer = e.target
  const props = layer.feature.properties

  layer.setStyle(addStyleDefault(props))
  info?.update()
}

export const styleDefault = (feature) => {
  const props = feature.properties
  return addStyleDefault(props)
}

export const selectStyle = (feature) => {
  const props = feature.properties
  const category = getCategory(props)

  return {
    fillColor: category.fillColor,
    weight: 4,
    color: '#3882ff',
    opacity: 0.7
  }
}
