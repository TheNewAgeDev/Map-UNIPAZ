import { getGeoJsonFromCircle } from '../../../util'

const HTML = `
  <div class="center content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>
    <img class="images-popup" src="/images/delimit/rotonda.jpg" alt="Rotonda" />
    <p>También conocida como glorieta, se trata de un cruce de intersecciones compuesto por una estructura en la parte central, que comunica a la entrada-salida y parqueadero estudiantil de la institución, además es la parada oficial donde las busetas (Cotsem) dejan y recogen a la comunidad estudiantil.</p>
    <img class="images-popup" src="/images/delimit/rotonda-1.jpg" alt="Rotonda" />
  </div>
`

const geoJsonCoordinates = getGeoJsonFromCircle([-73.74554246664047, 7.066912963879128], 10, 50)

export const ROTONDA = {
  type: 'Feature',
  geometry: geoJsonCoordinates,
  id: '956ba5b6-6180-4d8c-971e-1eb04bbb9c3a',
  properties: {
    name: 'Rotonda',
    category: 'Infraestructura',
    html: HTML
  }
}
