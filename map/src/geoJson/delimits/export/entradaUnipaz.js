import { getGeoJsonFromCircle, useVideo } from '@/util'

const HTML = () => `
  <div class="content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>

    ${useVideo(ENTRADA, 'entradaUnipaz.m4v')}

    <strong class="copyright">Bienvenido al Instituto Universitario de la Paz - UNIPAZ!!</strong>
  </div>
`

const geoJsonCoordinates = getGeoJsonFromCircle([-73.74486923217773, 7.066135708084767], 10, 50)

export const ENTRADA = {
  type: 'Feature',
  geometry: geoJsonCoordinates,
  id: '25eb74f7-667a-4c8c-b7e2-f936f0cce779',
  properties: {
    name: 'Entrada UNIPAZ',
    category: 'Infraestructura',
    html: HTML
  }
}
