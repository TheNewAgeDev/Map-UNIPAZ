import { useImage } from '@/util'

const HTML = () => `
  <div class="center content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>

    ${useImage(PARQUEADERO_ADMIN_1, 'parqAdmin1.jpg')}

    <p>Lugar destinado a estacionar vehículos (carros y motos) de la comunidad administrativa conformado por las plazas de estacionamiento, franja de circulación y franja de circulación peatonal, se encuentra ubicado al lado de la cafetería y al frente del laboratorio de anatomía.</p>
  </div>
`

export const PARQUEADERO_ADMIN_1 = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-73.74433279037476, 7.068270496549033],
        [-73.74411821365356, 7.068110787030152],
        [-73.74403238296509, 7.068233230999555],
        [-73.74423086643219, 7.0683982641244],
        [-73.74433279037476, 7.068270496549033]
      ]
    ]
  },
  id: '6caae6d9-af00-4a2c-b927-fe53eae63045',
  properties: {
    name: 'Parqueadero Administrativo 1',
    category: 'Parqueadero',
    html: HTML
  }
}
